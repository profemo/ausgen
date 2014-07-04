var doc;
var photo;
// text1: Standardvorlage 2 (mit Perso) (LVS Berlin/LVS Sachsen-Anhalt/BKA)
// text2: Standardvorlage Sonderfall (BVerf/BND/MAD/LVS Thü/ LVS BaWü)
// text0: rest
var agencies = {
	"Bundesamt VS": {
		  title: "Bundesamt für Verfassungsschutz"
		, subtitle: "Datenschutzreferat"
		, street: "Merianstraße 100"
		, zipcode: "50765"
		, country: "Deutschland"
		, city: "Köln"
		, tel: "0221 792-0"
		, fax: "0221 792-2915"
		, law: "§15 Bundesverfassungsschutzgesetz (BverfSchG) sowie § 19, Abs. 1 Bundesdatenschutzgesetz (BDSG)"
		, mail: "bfvinfo@verfassungsschutz.de"
		, www: "http://www.verfassungsschutz.de/"
		, text: 2
		, desc: "Bundesamt f&uuml;r Verfassungsschutz (BVerf)"
	}
	, "MAD": {
		  title: "Bundesministerium der Verteidigung"
		, subtitle: "Amt für den Militärischen Abschirmdienst"
		, street: "Postfach 100203"
		, zipcode: "50442"
		, city: "Köln"
		, country: "Deutschland"
		, tel: "221 9371 - 2500"
		, fax: "221 9371 - 2407"
		, law: "§ 9 MADG, § 15 Bundesverfassungsschutzgesetz sowie § 19, Abs. 1 Bundesdatenschutzgesetz (BDSG)"
		, mail: "MAD-Amt@t-online.de"
		, www: "http://www.kommando.streitkraeftebasis.de/portal/a/kdoskb/!ut/p/c4/04_SB8K8xLLM9MSSzPy8xBz9CP3I5EyrpHK94uyk-OyUfL3y1MySlOKS4hK93MQU_YJsR0UABos3fg!!/"
		, text: 2
		, desc: "MAD"
	}
	, "BND": {
		  title: "Bundesnachrichtendienst BND"
		, subtitle: "Dienstsitz Pullach"
		, street: "Heilmannstrasse 30"
		, zipcode: "82049" 
		, country: "Deutschland"
		, city: "Pullach"
		, tel: "089 7 93 15 67"
		, mail: "zentrale@bundesnachrichtendienst.de"
		, www: "Htt bnd.dep://www.bnd.bund.de/DE/_Home/home_node.html /"
		, law: "§ 7 BNDG, § 15 Bundesverfassungsschutzgesetz sowie § 19, Abs. 1 Bundesdatenschutzgesetz (BDSG)"
		, text: 2
		, desc: "BND"
	}
	, "BKA" : {
		title: "Bundeskriminalamt"
		, subtitle: "Der Datenschutzbeauftragte"
		, zipcode: "65173"
		, city: "Wiesbaden"
		, country: "Deutschland"
		, law: "§12, Abs. 5 Bundeskriminalamtgesetz (BKAG), §10, Abs. 2 ATDG sowie §19, Abs. 1 Bundesdatenschutzgesetz (BDSG)"
		, text: 1
		, desc: "BKA"
	}
	, "Bpol": {
		  title: "Bundespolizei"
		, subtitle: "Beauftragter für den Datenschutz"
		, street: "Heinrich-Mann-Allee 103"
		, zipcode: "14473" 
		, city: "Potsdam"
		, country: "Deutschland"
		, tel: "0331 97997-0"
		, fax: "0331 97997-1010"
		, www: "http://www.bundespolizei.de"
		, law: "§19, Abs. 1 Bundesdatenschutzgesetz (BDSG)" 
		, text: 1
		, desc: "BPol"
	}
	, "LVS Berlin": {
		  title: "Senatsverwaltung für Inneres"
		, subtitle: "Abteilung II – Verfassungsschutz"
		, street: "Postfach 62 05 60"
		, zipcode: "10795"
		, city: "Berlin"
		, country: "Deutschland"
		, tel: "030 90 129-111"
		, fax:  "030 90 129-844"
		, www: "http://www.berlin.de/sen/inneres/verfassungsschutz/"
		, law: "§ 31, Abs. 1 des Gesetzes über den Verfassungsschutz in Berlin und § 16 Berliner Datenschutzgesetz"
		, text: 1
		, desc: "Landesamt f&uuml;r Verfassungsschutz Berlin"
	}
	, "LVS Brandenburg": {
		  title: "Ministerium des Inneren des Landes Brandenburg"
		, subtitle: "Abteilung Verfassungsschutz"
		, street: "Posfach 60 11 26"
		, zipcode: "14411"
		, city: "Potsdam"
		, country: "Deutschland"
		, tel: "0331 866 - 2500"
		, fax: "0331 866 – 2599"
		, www: "http://www.verfassungsschutz.brandenburg.de"
		, law: "§ 18 Brandenburgischen Datenschutzgesetze und § 12, Abs. 1 Brandenburgisches Verfassungsschutzgesetzes"
		, mail: "info@verfassungsschutz-brandenburg.de"
		, text: 0
		, desc: "Landesamt f&uuml;r Verfassungsschutz Brandenburg"
	}
	, "LVS Bremen": {
		  title: "Landesamt für Verfassungsschutz Bremen"
		, subtitle: ""
		, street: "Flughafenallee 23"
		, zipcode: "28199" 
		, city: "Bremen"
		, tel: "0421 5377-0"
		, fax: "0421 5377-195"
		, law: "§ 16 Bremisches Verfassungsschutzgesetz (BremVerfSchG) und § 21 Bremischen Datenschutzgesetzes (BremDSG)"
		, country: "Deutschland"
		, mail: "office@lfv.bremen.de"
		, www: "http://www.verfassungsschutz.bremen.de/"
		, text: 0
		, desc: "Landesamt f&uuml;r Verfassungsschutz Bremen"
	}
	, "LVS Hamburg": {
		  title: "Hamburger Landesamt für Verfassungsschutz"
		, street: "Johanniswall 4"
		, zipcode: "20095"
		, city: "Hamburg"
		, tel: "040 244443"
		, fax: "040 338360"
		, mail: "poststelle@verfassungsschutz.hamburg.de"
		, law: "§ 23, Abs. 1 des Hamburgischen Verfassungsschutzgesetzes (HmbVerfSchG) und § 18 Hamburgisches Datenschutzgesetz (HmbDSG)"
		, www: "http://www.hamburg.de/verfassungsschutz/"
		, subtitle: ""
		, country: "Deutschland"
		, text: 0
		, desc: "Landesamt f&uuml;r Verfassungsschutz Hamburg"
	}
	, "LVS NS": {
		  title: "Niedersächsisches Ministerium für Inneres, Sport und Integration"
		, subtitle: "Abteilung Verfassungsschutz"
		, street: "Büttner Straße 28"
		, zipcode: "30165"
		, city: "Hannover"
		, tel: "0511 - 6709-0"
		, fax: "0511 - 6709-388"
		, www: "http://www.verfassungsschutz.niedersachsen.de/"
		, country: "Deutschland"
		, law: "§ 13, Abs. 1 Gesetz über den Verfassungsschutz im Lande Niedersachsen und § 16 Niedersächsisches Datenschutzgesetz (NDSG)"
		, text: 0
		, desc: "Landesamt f&uuml;r Verfassungsschutz Niedersachsen"
	}
	, "LVS Hessen": {
		  title: "Landesamt für Verfassungsschutz Hessen"
		, street: "Postfach 39 05"
		, zipcode: "65029"
		, city: "Wiesbaden"
		, country: "Deutschland"
		, tel: "0611 720 - 0"
		, fax: "0611 720 - 179"
		, mail: "Email: pressestelle@lfv.hessen.de "
		, www: "www.verfassungsschutz.hessen.de"
		, law: "§ 18, Abs. 1  Hessisches Gesetz über das Landesamt für Verfassungsschutz und § 18 Hessisches Datenschutzgesetz (HDSG)"
		, text: 0
		, desc: "Landesamt f&uuml;r Verfassungsschutz Hessen"
	}
	, "LVS MeckPomm": {
		  title: "Innenministerium Mecklenburg-Vorpommern"
		, subtitle: "Abteilung Verfassungsschutz"
		, street: "Postfach 11 05 52"
		, zipcode: "19005"
		, city: "Schwerin"
		, country: "Deutschland"
		, tel: "0385 - 74 20 0"
		, fax: "0385 - 71 44 38"
		, law: "§ 26, Abs. 1 Gesetz über den Verfassungsschutz im Lande Mecklenburg-Vorpommern und § 19, Abs. 1 Bundesdatenschutzgesetz (BDSG)"
		, mail: "info@verfassungsschutz-mv.de"
		, www: "www.verfassungsschutz-mv.de"
		, text: 0
		, desc: "Landesamt f&uuml;r Verfassungsschutz Mecklenburg-Vorpommern"
	}
	, "LVS NRW": {
		  title: "Ministerium für Inneres und Kommunales NRW"
		, subtitle: "Abteilung Verfassungsschutz"
		, street: "Postfach 10 30 13"
		, zipcode: "40021" 
		, city: "Düsseldorf"
		, country: "Deutschland"
		, tel: "0211 - 871 - 2821"
		, fax: "0211 - 871 - 2980"
		, law: "§14, Abs. 1 des Gesetz über den Verfassungsschutz in Nordrhein-Westfalen § 18 Abs. 2 Datenschutzgesetz Nordrhein-Westfalen"
		, mail: "kontakt.verfassungsschutz@mik1.nrw.de"
		, www: "http://www.mik.nrw.de/verfassungsschutz.html"
		, text: 0
		, desc: "Landesamt f&uuml;r Verfassungsschutz NRW"
	}
	, "LVS RLP": {
		  title: "Ministerium des Inneren und für Sport des Landes Rheinland-Pfalz"
		, subtitle: "Abteilung Verfassungsschutz"
		, street: "Postfach 32 80"
		, zipcode: "55022"
		, city: "Mainz"
		, country: "Deutschland"
		, tel: "06131 16-3772"
		, fax: "06131 16-3688"
		, law: "§ 18, Abs. 1 Landesverfassungsschutzgesetz Rheinland-Pfalz sowie § 18 Landesdatenschutzgesetz (LDSG) Rheinland-Pfalz"
		, mail: "Info.Verfassungsschutz@isim.rlp.de"
		, www: "http://isim.rlp.de/sicherheit/verfassungsschutz/"
		, text: 0
		, desc: "Landesamt f&uuml;r Verfassungsschutz Rheinland-Pfalz"
	}
	, "LVS Saarland": {
		  title: "Landesamt für Verfassungsschutz Saarland"
		, street: "Postfach 10 20 63"
		, zipcode: "66020"
		, city: "Saarbrücken"
		, country: "Deutschland"
		, tel: "0681 3038-0"
		, law: "§ 21, Abs. 1 Saarländischen Verfassungsschutzgesetzes sowie § 20 Saarländisches Datenschutzgesetz (SDSG)"
		, mail: "info@lfv.saarland.de"
		, www: "http://www.saarland.de/verfassungsschutz.htm"
		, text: 0
		, desc: "Landesamt f&uuml;r Verfassungsschutz Saarland"
	}
	, "LVS Sachsen": {
		  title: "Landesamt für Verfassungsschutz Sachsen"
		, street: "Neuländer Straße 60"
		, zipcode: "01129" 
		, city: "Dresden"
		, country: "Deutschland"
		, tel: "0351 8 58 50"
		, fax: "0351 8 58 55 00"
		, mail: "verfassungsschutz@lfv.smi.sachsen.de"
		, www: "http://www.verfassungsschutz.sachsen.de/"
		, law: "§ 9, Abs. 1 des Sächsischen Verfassungsschutzgesetzes sowie § 8, Abs. 1 Sächsisches Datenschutzgesetzes"
		, text: 0
		, desc: "Landesamt f&uuml;r Verfassungsschutz Sachsen"
	}
	, "LVS Sachsen-Anhalt": {
		  title: "Ministerium des Innern des Landes Sachsen-Anhalt"
		, subtitle: "Abteilung 5 – Verfassungsschutz"
		, street: "Postfach 18 49"
		, zipcode: "39008" 
		, city: "Magdeburg"
		, country: "Deutschland"
		, tel: "0391 567-3900"
		, fax: "0391 567-3999"
		, law: "§14 Gesetz über den Verfassungsschutz in Sachsen-Anhalt sowie § 15 Landesdatenschutzgesetz Sachsen-Anhalt"
		, mail: "vschutz@mi.sachsen-anhalt.de"
		, www: "http://www.mi.sachsen-anhalt.de/verfassungsschutz/"
		, text: 1
		, desc: "Landesamt f&uuml;r Verfassungsschutz Sachsen-Anhalt"
	}
	, "LVS Schleswig-Holstein": {
		  title: "Innenministerium des Landes Schleswig-Holstein"
		, subtitle: "Abt. IV 7 – Verfassungsschutz"
		, street: "Postfach 71 25"
		, zipcode: "24171"
		, city: "Kiel"
		, country: "Deutschland"
		, tel: "0431 988-3500"
		, fax: "0431 988-3503"
		, law: "§25 Landesverfassungsschutzgesetzes Schleswig-Holstein sowie §27 Landesdatenschutzgesetzes Schleswig-Holstein"
		, mail: "verfassungsschutz.schleswig-holstein@im.landsh.de"
		, www: "http://www.schleswig-holstein.de/IM/DE/InnereSicherheit/Verfassungsschutz/Verfassungsschutz_node.html"
		, text: 0
		, desc: "Landesamt f&uuml;r Verfassungsschutz Schleswig-Holstein"
	}
	, "LVS Bayern": {
		  title: "Bayrisches Landesamt für Verfassungsschutz"
		, street: "Knorrstr. 139"
		, zipcode: "80937" 
		, city: "München"
		, country: "Deutschland"
		, tel: "089 312 01 - 0"
		, fax: "089 312 01 - 380"
		, law: "Art. 11 Bayerisches Verfassungsschutzgesetz sowie Art. 10 Bayerisches Datenschutzgesetz"
		, mail: "poststelle@lfv.bayern.de"
		, www: "http://www.verfassungsschutz.bayern.de/"
		, text: 2
		, desc: "Landesamt f&uuml;r Verfassungsschutz Bayern"
	}
	, "LVS Thueringen": {
		  title: "Landesamt für Verfassungsschutz"
		, street: "Haarbergstraße 61 "
		, zipcode: "99097"
		, city: "Erfurt"
		, country: "Deutschland"
		, mail: "kontakt@tlfv.thueringen.de"
		, www: "http://www.thueringen.de/th3/verfassungsschutz/"
		, tel: "0361 4406-122"
		, fax: "0361 4406-251"
		, law: "§ 11 Thüringer  Verfassungsschutzgesetz sowie § 13Thüringer Datenschutzgesetz"
		, text: 2
		, desc: "Landesamt f&uuml;r Verfassungsschutz Th&uuml;hringen"
	}
	, "LVS Baden-Wuerttemberg": {
		  title: "Landesamt für Verfassungsschutz"
		, street: "Taubenheimstr. 85A"
		, zipcode: "70372"
		, city: "Stuttgart"
		, country: "Deutschland"
		, tel: "0711 9544 - 00"
		, fax: "0711 9544 - 444"
		, mail: "info@lfvbw.bwl.de"
		, www: "http://www.verfassungsschutz-bw.de/"
		, law: "§ 13 Gesetz über den Verfassungsschutz in Baden-Württemberg § 21 Landesdatenschutzgesetz Baden-Würtemberg"
		, text: 2
		, desc: "Landesamt f&uuml;r Verfassungsschutz Baden-W&uuml;rttemberg"
	}
}
var addr = {
	  name: ''
	, street: ''
	, city: ''
	, zipcode: ''
	, birthdate: ''
	, birthplace: ''
}
var crlf = "\r\n";
var texts = [
"Sehr geehrte Damen und Herren," + crlf + crlf +
"geben Sie mir bitte auf der Grundlage von $rechtsgrundlage$ schriftlich \
Auskunft über die durch Ihre Behörde (auch im Weg der \
Auftragsdatenverarbeitung)" + crlf + 
"   - zu meiner Person gespeicherten Daten," + crlf + 
"   - den Zweck und die Rechtsgrundlage der Speicherung," + crlf + 
"   - die Herkunft der Daten und die empfangenden Stellen oder Kategorien \
von empfangenden Stellen, an die Daten übermittelt werden oder \
wurden." + crlf + crlf +
"Bitte teilen Sie mir ggfs. auch mit, auf welcher Rechtsgrundlage Daten \
über mich übermittelt wurden." + crlf + crlf +
"Schliesslich bitte ich um eine Eingangsbestätigung dieses Schreibens." + crlf +
"Bis zu Ihrer Antwort widerspreche ich der Löschung über mich gesammelter Daten." 
+ crlf + crlf + crlf +
"Mit freundlichen Grüßen" + crlf

, "Sehr geehrte Damen und Herren," + crlf + crlf +
"geben Sie mir bitte auf der Grundlage von $rechtsgrundlage$ schriftlich \
Auskunft über die durch Ihre Behörde (auch im Weg der \
Auftragsdatenverarbeitung)" + crlf + 
"   - zu meiner Person gespeicherten Daten," + crlf + 
"   - den Zweck und die Rechtsgrundlage der Speicherung," + crlf + 
"   - die Herkunft der Daten und die empfangenden Stellen oder Kategorien \
von empfangenden Stellen, an die Daten übermittelt werden oder \
wurden." + crlf + crlf +
"Bitte teilen Sie mir ggfs. auch mit, auf welcher Rechtsgrundlage Daten \
über mich übermittelt wurden." + crlf +
"Meiner Anfrage liegt ein besonderes Informationsinteresse unter \
Wahrnehmung meines verfassungsrechtlich verbürgten Grundrechts auf \
informationelle Selbstbestimmung zugrunde." + crlf + crlf +
"Schliesslich bitte ich um eine Eingangsbestätigung dieses Schreibens."
+ crlf + 
"Bis zu Ihrer Antwort widerspreche ich der Löschung über mich \
gesammelter Daten." + crlf + crlf + 
"Mit diesem Brief übersende ich Ihnen eine Personalausweiskopie. " 
+ crlf + crlf + crlf +
"Mit freundlichen Grüßen" + crlf

, "Sehr geehrte Damen und Herren," + crlf + crlf +
"geben Sie mir bitte auf der Grundlage von $rechtsgrundlage$ schriftlich \
Auskunft über die durch Ihre Behörde (auch im Weg der \
Auftragsdatenverarbeitung)" + crlf + 
"   - zu meiner Person gespeicherten Daten," + crlf + 
"   - den Zweck und die Rechtsgrundlage der Speicherung," + crlf + 
"   - die Herkunft der Daten und die empfangenden Stellen oder Kategorien \
von empfangenden Stellen, an die Daten übermittelt werden oder \
wurden." + crlf + crlf +
"Bitte teilen Sie mir ggfs. auch mit, auf welcher Rechtsgrundlage Daten \
über mich übermittelt wurden." + crlf +
"Meiner Anfrage liegt ein besonderes Informationsinteresse unter \
Wahrnehmung meines verfassungsrechtlich verbürgten Grundrechts auf \
informationelle Selbstbestimmung zugrunde." + crlf + 
"Ich bin wie Andrea Röpke journalistisch tätig und \
fürchte daher, dass auch über mich rechtswidrig Daten gesammelt \
wurden und werden." + crlf  + crlf +
"Schliesslich bitte ich um eine Eingangsbestätigung dieses Schreibens."
+ crlf + 
"Bis zu Ihrer Antwort widerspreche ich der Löschung über mich \
gesammelter Daten." + crlf + crlf + 
"Mit diesem Brief übersende ich Ihnen eine Personalausweiskopie. " 
+ crlf + crlf + crlf +
"Mit freundlichen Grüßen" + crlf
];

function generateLetters() {
	var receivers = [];
	console.log("gernat");
	$("input[name='agencies[]']:checked").each(function() {
		//checked_agencies.push($(this).val());
		//console.log($(this).val());

		receivers.push( agencies[$(this).val()] );
	});

	if (receivers.length === 0) {
		alert('Sie haben kein Amt ausgewählt.');
		return;
	}

	// check if necessary input is there?
	// if (addr.name === '' || addr.zipcode === "" || addr.city === "" || addr.birthplace === '' || addr.birthday === ""

	console.log(receivers);
	var cnt = 0;
	for (var r in receivers) {
		generateLetter(receivers[r], cnt++);
	}
}

function generateLetter(receiver, cnt) {
console.log(cnt);
	// letter layout according to http://upload.wikimedia.org/wikipedia/commons/6/64/DIN_5008%2C_Form_A.svg
	if (cnt === 0) 
		doc = new jsPDF('p', 'mm', 'a4');
	else 
		doc.addPage();

	if (typeof doc == 'undefined') 
		alert('Error within PDF generation. Your browser does not seem to support this operation. If possible, please try another one.')

	// faltmarken 
	doc.setLineWidth(0.5);
	doc.line(0, 87, 10, 87);

	doc.setLineWidth(0.5);
	doc.line(0, 148.5, 10, 148.5);

	//doc.setFont(['Times', 'Roman']).setFontSize(12);
	//doc.text(20, 20, 'Hello world!');
	//doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');

	addr.name = $("#addr_name").val() || 'Max Mustermann';
	addr.street = $("#addr_street").val() || 'Musterstr. 1';
	addr.zipcode = $("#addr_zipcode").val() || '12345';
	addr.city = $("#addr_city").val() || 'Musterstadt';
	addr.birthdate = $("#addr_birthdate").val() || '01.01.1970';
	addr.birthplace = $("#addr_birthplace").val() || 'Musterstadt';
	var send_back_to = [addr.name, addr.street, addr.zipcode + " " + addr.city].join(', ');
	var lines_send_back_to = doc.splitTextToSize(send_back_to, 80);

	doc.setFontSize(9);
	doc.text(25, 27, lines_send_back_to);

	//doc.text(25, 27, send_back_to);
	//console.log(send_back_to);

	doc.setFontSize(10);
	var now = new Date();
	//var date = crlf + "Datum: " + now.getDate() + "." + (now.getMonth()+1) + "." + now.getFullYear();
	var birthdate = "Geboren am " + addr.birthdate + ", in " + addr.birthplace;
	//var sender = [addr.name, addr.street, addr.zipcode + " " + addr.city, birthdate, date].join(crlf);
	var sender = [addr.name, addr.street, addr.zipcode + " " + addr.city, birthdate].join(crlf);
	//doc.text(125, 32, sender);
	var lines_sender = doc.splitTextToSize(sender, 75)
	doc.text(125, 32, lines_sender);

	var date = now.getDate() + "." + (now.getMonth()+1) + "." + now.getFullYear();
	doc.text(165, 92, date);

	var rcvr = receiver.title + crlf;

	if (receiver.subtitle)
		rcvr += receiver.subtitle + crlf;

	if (receiver.street)
		rcvr += receiver.street + crlf;

	rcvr +=
		+ receiver.zipcode + " " + receiver.city + crlf
		+ receiver.country;
	//doc.text(25, 44.7, rcvr);
	var lines_rcvr = doc.splitTextToSize(rcvr, 80)
	doc.text(25, 44.7, lines_rcvr);

	var body = texts[ receiver.text ].replace("$rechtsgrundlage$", receiver.law);

	var attachment = "";
	if (receiver.text === 1 || receiver.text === 2) 
		attachment = crlf + crlf + crlf + "Anhang: Personalausweiskopie";

	var txt = 'Betreff: Antrag auf Aktenauskunft' + crlf  + crlf + crlf + body + crlf
			+ crlf + addr.name + attachment;
	//doc.text(25, 95.46, txt);
	var lines = doc.splitTextToSize(txt, 155)
	doc.text(25, 95.46, lines)

	if (photo) {
		doc.addPage();
		doc.addImage(photo, 'JPEG', 15, 40, 180, 160);
	}
}

function getPhoto(evt) {
	console.log('getphoto');
	var file = evt.target.files[0];
	var reader = new FileReader();

	//if (!file.type.match('image.')) {
	//continue;
	//}

	var reader = new FileReader();

	reader.onload = (function(theFile) {
		return function(e) {
			//console.log(e.target.result);
			photo = e.target.result;

			//updatePane();
		};
	})(file);

	reader.readAsDataURL(file)

	//console.log(data);
	//console.log(file);
	//console.log(evt.target);
}

function updatePane() {
	generateLetters();

	if (typeof doc !== 'undefined') {
		var string = doc.output('datauristring');
		$('.preview-pane').attr('src', string);
	}
}

function savePDF() {
	generateLetters();
	doc.save('anschreiben.pdf');
}

$(function() {
	for (var a in agencies) {
		var agency = agencies[a];
		var br = "<br/>";
		/*
		var rcvr = agency.title + br;

		if (agency.subtitle)
			rcvr += agency.subtitle + br;

		rcvr += br;

		rcvr +=
			  agency.street + br 
			+ agency.zipcode + " " + agency.city + br
			+ agency.country + br;

		if (agency.www)
			rcvr += "<a href='" + agency.www + "'>" + agency.www + "</a>";
		*/
		var checked = '';
		if (a === "Bundesamt VS")
			checked ='checked="checked"';

		var html = '\
		<div class="form-group col-lg-6" style="margin-bottom:5px;">\
			<div class="checkbox">\
				<label>\
					<input ' + checked + ' name="agencies[]" value="' + a + '" type="checkbox"> ' + agency.desc + '\
					</label>\
			</div>\
		</div>\
		';
		$("#agencies").append(html);
	}

	document.getElementById('passport_photo').addEventListener('change', getPhoto, false);

});
