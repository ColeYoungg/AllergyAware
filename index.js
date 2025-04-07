let heading = document.querySelector("#heading");
let list = document.querySelector("#list");

const symptoms = {
  topic: `Symptoms`,
  items: [`Urticaria (Hives)`, `Erythema (Redness)`, `Edema (Swelling)`, `Oral Pruitus or Paresthesia (Itching or tingling around mouth and throat) `, `Dyspnea (Shortness of breath)`, `Anaphylaxis`]
}

const treatment = {
  topic: `Treatment`,
  items: [`Adrenaline through an auto-injector (Epinephrine through an Epi-Pen)`, `H1 Receptor Antagonists (Antihistamines to relieve mild symptoms)`, `Beta-agonists (Bronchodilators such as an inhaler for breathing difficulties)`, `Oral Immunotherapy  to help reduce the risk of severe reactions`]
}

const riskfactors = {
 topic: `Risk Factors`,
 items: [`Family history`, `Atopy`, `Early Exposure`, `Geographical factors`]
}

const substitutions = {
topic: `Substitutions`,
items: [`Almonds`, `Sunflower Seeds`, `Cashews`, `Soy Nuts`, `Pumpkin Seeds`, `Tahini`],
}

const almondbuttercookie = {
topic: `Almond Butter Cookie`,

}

document.querySelector("#btn-symptoms").addEventListener("click", displaySymptomsContent);

function displaySymptomsContent(){
  heading.innerHTML = symptoms.topic;

  list.innerHTML = ""

  // for (i = 0; i < symptoms.items.length; i++){
  //   list.innerHTML += "<li>" + symptoms.items[i] + "</li>"
  // }

  // OR

  for (i of symptoms.items){
    list.innerHTML += "<li>" + i + "</li>"
  }
}


document.querySelector("#btn-treatment").addEventListener("click", displayTreatmentContent);

function displayTreatmentContent(){
  heading.innerHTML = treatment.topic;

  list.innerHTML = ""

  // for (i = 0; i < symptoms.items.length; i++){
  //   list.innerHTML += "<li>" + symptoms.items[i] + "</li>"
  // }

  // OR

  for (i of treatment.items){
    list.innerHTML += "<li>" + i + "</li>"
  }
}

document.querySelector("#btn-riskfactors").addEventListener("click", displayRiskFactorsContent);

function displayRiskFactorsContent(){
  heading.innerHTML = riskfactors.topic;

  list.innerHTML = ""

  // for (i = 0; i < symptoms.items.length; i++){
  //   list.innerHTML += "<li>" + symptoms.items[i] + "</li>"
  // }

  // OR

  for (i of riskfactors.items){
    list.innerHTML += "<li>" + i + "</li>"
  }
}

// Peanuts

document.querySelector("#btn-substitutions").addEventListener("click", displaySubstitutionContent);

function displaySubstitutionContent(){
  heading.innerHTML = substitutions.topic;

  list.innerHTML = ""

  // for (i = 0; i < symptoms.items.length; i++){
  //   list.innerHTML += "<li>" + symptoms.items[i] + "</li>"
  // }

  // OR

  for (i of substitutions.items){
    list.innerHTML += "<li>" + i + "</li>"
  }
}


document.querySelector("#btn-abrecipe").addEventListener("click", displayABRecipeContent);

function displayABRecipeContent(){
  heading.innerHTML = almondbuttercookie.topic;

  list.innerHTML = ""

  // for (i = 0; i < symptoms.items.length; i++){
  //   list.innerHTML += "<li>" + symptoms.items[i] + "</li>"
  // }

  // OR

  for (i of almondbuttercookie.items){
    list.innerHTML += "<li>" + i + "</li>"
  }
}