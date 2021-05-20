/* Creare uno slider di immagini: potete usare le immagini che desiderate.
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera (usate un event listener su document e ascoltate per il keyup)
Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Bonus:
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (usate created o mounted!). */

const app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    images: [
      "./assets/img/img (1).jpg",
      "./assets/img/img (2).jpg",
      "./assets/img/img (3).jpg",
      "./assets/img/img (4).jpg",
      "./assets/img/img (5).jpg",
    ],
  },

  methods: {
    prev() {
      console.log("click su prev");
      if (this.counter === 0) {
        return (this.counter = this.images.length - 1);
      }
      return (this.counter -= 1);
    },
    next() {
      console.log("click su next");
      if (this.counter === this.images.length - 1) {
        return (this.counter = 0);
      }
      return (this.counter += 1);
    },

    selectImage(index) {
      return (this.counter = index);
    },
  },

  mounted() {
    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowRight") {
        this.next();
      }
      if (e.key === "ArrowLeft");
      {
        this.prev();
      }
    });
  },
  mounted() {
    setInterval(this.next, 5000);
  },
});
