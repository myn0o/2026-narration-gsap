/** Import=================== */
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,InertiaPlugin,SplitText);

/** Variables ===================  */


/** Fonctions =================  */


/** Animation =====================  */

/** Block1 ========= */

/** https://gsap.com/docs/v3/Plugins/SplitText/ ==========  */
  SplitText.create('.hero-title-wrap', {
    type: 'lines',
    autoSplit: true,
    onSplit(split) {
      return gsap.from(split.lines, {
        rotationX: -56,
            transformOrigin: "50% 50% -160px",

        opacity: 0,
        duration: 1.3,
        stagger: 0.25,
      });
    },
  });


let tl = gsap.timeline()

tl.to(".minicard", {
    y: '-15',
    

})



/** Block2 ========= */


gsap.from(".travel-card", {

    scrollTrigger: {
      trigger: '#section2',
      start: 'top top',
      end: 'bottom bottom',
      // markers: true,
      scrub: 0.8,
    },  
    x: '100vw',
    opacity: 0,
    duration: 3,
    stagger: 0.15,

  });


/** Block3 ========= */

  // Ca récupère toutes les images, soit toutes les pièces de l'id puzzle 
  const puzzle = document.querySelector('#puzzle');
  // Ca les rassemble dans un tableau, dans id et la class
  const pieces = gsap.utils.toArray('#puzzle .puzzle-piece');
  // On utilise const pour pouvoir réutiliser le bouton qui lui dira de mélanger à nouveau
  const resetButton = document.querySelector('#puzzle-reset');



  // Créer une fonction pour mélanger l'ordre des pièces dans le tableau
  function melangerPieces() {
   // sort() et Math.random() place les pièces dans un ordre aléatoire, le 0.5 permet le mélange
    const melange = [...pieces].sort(() => Math.random() - 0.5);
    melange.forEach(piece => puzzle.append(piece)); // *Chatgpt ( line 76 et 106 ) c'est quoi ? append() la déplace à la fin : c’est ainsi que le code change l’ordre des pièces pour each element du puzzle
  }



 //
  Draggable.create(pieces, {
    type: 'x,y',
    // Empêche les pièces d'être déplacées hors de la grille
    bounds: puzzle,
    onDragStart() { // On va commencer à glisser la piece
      this.target.classList.add('dragging');
    },
    // Quand on va lacher la piece 
    onDragEnd() {
      // This target désigne la piece qu'on vient de drop
      const piece = this.target;
      // piece.find" designe la piece qu'on va déplacer avec l'autre, autre !== piece" c'est celle qu'on déplace actuellement, "this.hitTest(autre, '25%'));" ca permet que la piece qu'on deplace survole les autres
      const cible = pieces.find(autre => autre !== piece && this.hitTest(autre, '25%'));

      // Si je déplace une piece ça l'échange avec l'autre, sinon ça fait rien
      if (cible) {
        // Copie l'ordre actuel des pièces dans la grille.
        const ordre = [...puzzle.children];
        // Ca permet de trouver la position des deux puzzles dans le tableau
        const indexPiece = ordre.indexOf(piece);
        const indexCible = ordre.indexOf(cible);
        // Echanger les deux, l'un prend la place de l'autre
        [ordre[indexPiece], ordre[indexCible]] = [ordre[indexCible], ordre[indexPiece]];
        // Confirme l'ordre et les mets à leur place où ils ont échangés, sinon ils restent à leur place initiales
        ordre.forEach(element => puzzle.append(element)); //
      }

      // Durée du inertia avant qu'il soit remis a la place choisie
      gsap.to(piece, { x: 0, y: 0, duration: 0.4 });
      piece.classList.remove('dragging');
    },
  });

  // Mélange à nouveau les pieces quand le bouton est cliqué
  resetButton.addEventListener('click', melangerPieces);
  // Mélange les pièces une première fois quand on reload la page
  melangerPieces();




