function toggleDescription(descriptionId) {
  // Captura a descrição pelo ID
  var description = document.getElementById(descriptionId);

  // Alterna entre abrir e fechar a descrição
  if (description.style.display === "none" || description.style.display === "") {
    description.style.display = "block"; // Mostra a descrição
  } else {
    description.style.display = "none"; // Esconde a descrição
  }
}

function toggleDescription(descId) {
  // Captura todas as descrições
  const allDescriptions = document.querySelectorAll('.description_Html_MB, .description_Css_MB, .description_JavaScript_MB, .description_Python_MB, .description_Bi_MB');
  
  // Fecha todas as descrições
  allDescriptions.forEach(function(description) {
      if (description.id !== descId) {
          description.style.display = 'none';
      }
  });

  // Alterna a descrição clicada
  const currentDescription = document.getElementById(descId);
  if (currentDescription.style.display === 'none' || currentDescription.style.display === '') {
      currentDescription.style.display = 'block';
  } else {
      currentDescription.style.display = 'none';
  }
}
