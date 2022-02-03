function getPDF() {
  // ****************** jsPDF **********************
  //JavaScript library used  to generate PDFs - jsPDF
  //used version - 2.4.0
  //jsPDF documentation used - https://rawgit.com/MrRio/jsPDF/master/docs/index.html

  const { jsPDF } = window.jspdf;

  //required for creating pdf from html element
  window.html2canvas = html2canvas;

  //creating instance of jsPDF
  var doc = new jsPDF("p", "mm", [1200, 1810]);

  //selecting html element to be printed
  var pdfjs = document.querySelector("#resumeContent");

  // documentation used -- https://rawgit.com/MrRio/jsPDF/master/docs/module-html.html#~html
  doc.html(pdfjs, {
    callback: function (doc) {
      doc.save("output-resume-test.pdf");
    },
    margin: [50, 10, 50, 10],
    autoPaging: "text",
    x: 10,
    y: 10,
  });
}

document.getElementById("getPdfBtn").addEventListener("click", getPDF);
