
/*****************************************************************************************************************
 *Aufgabe 1: Geben Sie mit einem "alert"-Befehl beim Laden der Seite ein "Willkommen!" aus. (head-Bereich)      **
 *****************************************************************************************************************/

/******************************************************************************************************************
 *Aufgabe 2: Geben Sie mit einem "onclick"-Befehl in dem <img>-Tag des Logo,                                     **
 *ein "Der Link ist noch nicht erreichbar!" aus!                                                                  **
 ******************************************************************************************************************/


/******************************************************************************************************************
 *Aufgabe 3: Positionieren Sie den Curser schon beim Laden der Seite in das Feld "Vorname" (kleine Hilfe: focus()**
 ******************************************************************************************************************/


/******************************************************************************************************************
 *Aufgabe 4: Verwende den Eventhandler "onblur":                                                                 **
 *a) Schreiben Sie in der "checkName()"-Funktion eine Abfrage die überprüft, ob das Feld "Vorname" leer          **
 *   ist, wenn ja dann geben Sie aus, dass dieses Feld nicht leer sein darf.                                     **
 *b) Prüfen Sie außerdem mit der Funktion "checkPlz()", ob in "Postleitzahl" wirklich nur Zahlen eingeben wurden.**
 *   (kleine Hilfe: isNaN(Wert))                                                                                 **
 ******************************************************************************************************************/

function checkName() {
    
        if(window.document.anmeldung.vorname.value == "")
            alert("Vorname eintagen!");
}

function checkPlz() {
      if(isNaN(window.document.anmeldung.postleitzahl.value))
            alert("Ungueltige Eingabe!");  
}

/******************************************************************************************************************
 *Aufgabe 5: Schreibe in der "check_box()"-Funktion eine Abfrage die überprüft, ob eins der beiden               **
 *"radio"-Buttons "Schlagzeug" makiert wurde oder nicht. Genau eines der beiden Buttons muss Makiert werden.     **
 *(kleiner Hinweis: da mehrere Buttons den Namen "schlagzeug" haben, werden sie als Array gespeichert, also wäre ** 
 *das z.B. für den ersten Button schlagzeug[0] )                                                                 **
 ******************************************************************************************************************/

function check_box() {
    if(window.document.anmeldung.schlagzeug[0].checked==false && window.document.anmeldung.schlagzeug[1].checked==false)
        alert("Auswahl treffen");
}

/******************************************************************************************************************
 *Aufgabe 6: Ein Beispiel-Text soll im Textfeld erscheinen, sobald man mit der Maus dieses Textfeld angeklickt   **    
 *hat. Dies lässt sich mit Hilfe des Eventhandlers onfocus bewerkstelligen.                                      **                                                                                                        **
 ******************************************************************************************************************/

