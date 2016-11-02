function emailOnFormSubmit(e) {

	// Crear tantas variables como respuestas (columnas en la hoja de cálculo) que necesita para envia
	var timestamp = e.values[0];
	var name = e.values[1];
	var city = e.values[2];
	var mail = e.values[3];
	var dni = e.values[4];
  
	//El asunto del correo electrónico
	var subject = "Confirmación de prueba para " + name;

	//emailBody es para aquellos dispositivos que no pueden representar HTML, es texto sin formato
	var emailBody = "Esta es una prueba de correo electrónico para el usuario " + name + 
					"\nFrom " + city + 
					"\nWith email " + mail + 
                      "\nWith dni " + dni + 
					"\nRegister on " + timestamp +
					"\n\nThank you for register!"; 
	
	// html es para aquellos dispositivos que puedan representar HTML
	var htmlBody =  "Gracias, su formulario llego conrrectamente <i>" + timestamp + "</i>" + 
					"<br/><br/>Los datos que introdujo fueron los siquientes: " +
					"<br/>Your Name: <font color=\"red\"><strong>" + name + "</strong></font>" +
					"<br/>From: " + city + 
                     " <br/>DNI: " + dni +
					"<br/>With email: " + mail;
	

  var advancedOpts = { name: "Forms - Gerardo Garcia", htmlBody: htmlBody };

	MailApp.sendEmail(mail, subject, emailBody, advancedOpts);

}