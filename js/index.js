// a² = b² + c²
// a = (b² + c²)^(1/2) = sqrt(b² + c²)

function calc() {
    let hip = document.getElementById("hipotenusa").value;
    let cat1 = document.getElementById("cateto1").value;
    let cat2 = document.getElementById("cateto2").value;

  if (hip == "" && cat1 == "" && cat2 == "") {
    document.getElementById("resultado").innerHTML = resultado;

  } else if (hip == "") {
    cat1 = Number(cat1) ** 2;
    cat2 = Number(cat2) ** 2;
    hip = Math.sqrt(cat1 + cat2);
    document.getElementById("resultado").innerHTML = `${hip}`;

    document.getElementById("hip").innerHTML += `${hip.toFixed(1)}`;
    document.getElementById("cat1").innerText = `${Math.sqrt(cat1)}`;
    document.getElementById("cat2").innerText = `${Math.sqrt(cat2)}`;
    
  } else if (cat1 == "") {
    hip = Number(hip) ** 2;
    cat2 = Number(cat2) ** 2;
    cat1 = Math.sqrt(hip + cat2);
    document.getElementById("resultado").innerHTML = `${Math.sqrt(cat1)}`;
    document.getElementById("hip").innerText = `${Math.sqrt(hip)}`;
    document.getElementById("cat1").innerText = `${cat1.toFixed(1)}`;
    document.getElementById("cat2").innerText = `${Math.sqrt(cat2)}`;

  } else if (cat2 == "") {
    hip = Number(hip) ** 2;
    cat1 = Number(cat1) ** 2;
    cat2 = Math.sqrt(hip + cat1);
    document.getElementById("resultado").innerHTML = `${Math.sqrt(cat2)}`;

} else {
    document.getElementById("hip").innerText = `${Math.sqrt(hip)}`;
    document.getElementById("cat1").innerText = `${Math.sqrt(cat1)}`;
    document.getElementById("cat2").innerText = `${cat2.toFixed(1)}`;
    document.getElementById("resultado").innerHTML = `
    ${hip}
    ${Math.sqrt(cat1)}
    ${Math.sqrt(cat2)}`;
  }
}
