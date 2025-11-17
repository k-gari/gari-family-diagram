fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const fc = new FamilyChart();
    fc.data(data);
    fc.layout('tree');
    fc.mount('#chart');
  })
  .catch(err => console.error("Erreur chargement JSON", err));
