const designers = [
  {
    id: 1,
    name: 'Alice Johnson',
    specialty: 'Modern Dresses',
    experience: 5,
    rating: 4.8,
    sampleImage: 'https://www.joinsewna.com/static/media/img1_100W.c4c12c89b9425dcfb847.webp'
  },
  {
    id: 2,
    name: 'Michael Smith',
    specialty: 'Casual Wear',
    experience: 8,
    rating: 4.6,
    sampleImage: 'https://www.joinsewna.com/static/media/img10_97W.6e566d084283af644fce.webp'
  },
  {
    id: 3,
    name: 'Sophia Lee',
    specialty: 'Formal Attire',
    experience: 6,
    rating: 4.9,
    sampleImage: 'https://www.joinsewna.com/static/media/img9_151W.dab4600f286264b47ee8.webp'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const designerContainer = document.getElementById('designers');
  const categoryItems = document.querySelectorAll('aside li');

  const renderDesigners = (filter = null) => {
    designerContainer.innerHTML = '';
    designers
      .filter(d => !filter || d.specialty === filter)
      .forEach(designer => {
        const card = document.createElement('div');
        card.className = 'designer-card';
        card.innerHTML = `
          <img src="${designer.sampleImage}" alt="${designer.name}" />
          <h3>${designer.name}</h3>
          <p>Specialty: ${designer.specialty}</p>
          <p>Experience: ${designer.experience} years</p>
          <p>Rating: ⭐ ${designer.rating}</p>
        `;
        designerContainer.appendChild(card);
      });
  };

  // Filter functionality
  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      categoryItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      renderDesigners(item.dataset.category);
    });
  });

  renderDesigners(); // Initial render
});
