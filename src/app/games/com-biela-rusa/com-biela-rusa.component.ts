import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-com-biela-rusa',
  standalone: false,
  templateUrl: './com-biela-rusa.component.html',
  styleUrl: './com-biela-rusa.component.css',
  animations: [
    trigger('fadeIn', [
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0.8) rotate(-10deg)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'scale(1) rotate(0deg)'
      })),
      transition('hidden => visible', [
        animate('0.6s ease-out')
      ])
    ])
  ]
})

export class ComBielaRusaComponent implements OnInit {
  @ViewChild('ruleta') ruletaRef!: ElementRef;
  @ViewChild('puntero') punteroRef!: ElementRef;

  // Variables para la ruleta
  gira: number = 0;
  giraDos: number = 0;
  mostrarModal: boolean = false;
  imagenResultado: string = '';
  resultadoClase: string = '';
  resultadoTitulo: string = '';
  resultadoMensaje: string = '';
  resultadoEmoji: string = '';

  // Variables para las instrucciones
  mostrarInstruccionesModal: boolean = false;
  pasoActual: number = 0;
  textoInstruccion: SafeHtml = '';
  esPasoFinal: boolean = false;

  // Sonidos
  sonidoRuleta: HTMLAudioElement = new Audio();
  sonidoItem1: HTMLAudioElement = new Audio();
  sonidoOtros: HTMLAudioElement = new Audio();

  // Instrucciones
  instrucciones = [
    {
      texto: "Al girar la ruleta, existen 2 posibles respuestas: Salvado o Bebe",
      imagen: "assets/img/biela_rusa/ruleta-1.jpg"
    },
    {
      texto: "Todos los participantes girarán la ruleta",
      imagen: "assets/img/biela_rusa/menu-1.jpg"
    },
    {
      texto: "Si tu respuesta es 'Salvado', no beberás ningún shot",
      imagen: "assets/img/biela_rusa/saved.jpg"
    },
    {
      texto: "Pero si tu respuesta es 'Bebe', te tocará beber una serie de shots",
      imagen: "assets/img/biela_rusa/drink.jpg"
    },
    {
      texto: "Acuerden entre todos los integrantes cuántos shots se bebe",
      imagen: "assets/img/biela_rusa/menu-5.jpg"
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Inicializar sonidos
    this.sonidoRuleta.src = '/assets/audios/wheel.mp3';
    this.sonidoItem1.src = '/assets/audios/disparo.mp3';
    this.sonidoOtros.src = '/assets/audios/vacio.mp3';
  }

  girarRuleta(): void {
    this.sonidoRuleta.play();
    
    this.gira = 1200 + Math.random() * 1200;
    
    const puntero = this.punteroRef.nativeElement;
    const ruleta = this.ruletaRef.nativeElement;
    
    puntero.style.pointerEvents = 'none';
    ruleta.style.transition = 'all 8.4s cubic-bezier(0.1, 10, 0.2, 1)';
    ruleta.style.transform = `rotate(${this.gira}deg)`;
    
    // Detectar fin de la animación
    ruleta.addEventListener('transitionend', () => this.finGiro(), { once: true });
  }

  finGiro(): void {
    const puntero = this.punteroRef.nativeElement;
    const ruleta = this.ruletaRef.nativeElement;
    
    puntero.style.pointerEvents = 'auto';
    ruleta.style.transition = 'none';
    this.giraDos = this.gira % 360;
    ruleta.style.transform = `rotate(${this.giraDos}deg)`;

    // Determinar resultado
    if ((this.giraDos >= 0 && this.giraDos < 60) || 
        (this.giraDos >= 180 && this.giraDos < 361)) {
      this.sonidoItem1.play();
      this.imagenResultado = 'assets/img/biela_rusa/drink.jpg';
      this.resultadoClase = 'beber';
      this.resultadoTitulo = '¡A BEBER!';
      this.resultadoMensaje = '¡Te ha tocado beber!';
      this.resultadoEmoji = '🍻';
      
      // Pequeño retraso para el sonido y el efecto dramático
      setTimeout(() => {
        this.mostrarModal = true;
      }, 500);
      
    } else {
      this.sonidoOtros.play();
      this.imagenResultado = 'assets/img/biela_rusa/saved.jpg';
      this.resultadoClase = 'salvado';
      this.resultadoTitulo = '¡SALVADO!'; 
      this.resultadoMensaje = 'Te has salvado... por ahora';
      this.resultadoEmoji = '😎';
      
      setTimeout(() => {
        this.mostrarModal = true;
      }, 500);
    }
  }


  cerrarModal(): void {
    this.mostrarModal = false;
  }

  mostrarInstrucciones(): void {
    this.pasoActual = 0;
    this.actualizarContenidoInstruccion();
    this.mostrarInstruccionesModal = true;
  }

  siguienteInstruccion(): void {
    this.pasoActual++;
    this.actualizarContenidoInstruccion();
  }

  cerrarInstrucciones(): void {
    this.mostrarInstruccionesModal = false;
  }

  actualizarContenidoInstruccion(): void {
    const instruccion = this.instrucciones[this.pasoActual];
    
    // Crear contenido HTML seguro
    const contenidoHTML = `
      <p>${instruccion.texto}</p>
      <img src="${instruccion.imagen}" alt="Imagen del paso" style="max-width: 200px; height: auto; border-radius: 10px; margin-top: 2rem">
    `;
    
    this.textoInstruccion = this.sanitizer.bypassSecurityTrustHtml(contenidoHTML);
    this.esPasoFinal = this.pasoActual === this.instrucciones.length - 1;
  }

  onClick(event: MouseEvent): void {
    const modal = document.getElementById('modal');
    const modal2 = document.getElementById('modal2');
    
    if (event.target === modal) {
      this.mostrarModal = false;
    }
    
    if (event.target === modal2) {
      this.mostrarInstruccionesModal = false;
    }
  }
}