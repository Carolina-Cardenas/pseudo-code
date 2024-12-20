// START

// FUNCTION named "DelaNotan"
//     // Be användaren om input
//     INPUT "summa" // Totalbelopp för notan
//     INPUT "antalVänner" // Antal vänner
//     INPUT "dricks" // Dricks i decimalform

//     // Beräkna totalsumma inklusive dricks
//     SET totalSumma = CALCULATE summa + (summa * dricks)

//     // Dela totalsumman mellan vännerna
//     SET summaPerPerson = CALCULATE totalSumma / antalVänner

//     // Skriv ut resultatet
//     PRINT "Varje person ska betala:" summaPerPerson
// ENDFUNCTION

// // Anropa funktionen
// CALL FUNCTION named "DelaNotan"
// END

// START

// // Initialisera variabler
// PRINT "Ange startord:"
// INPUT startord
// PRINT "Ange slutord:"
// INPUT slutord
// SET ordbok = [lista över giltiga ord]

// // Kontrollera initiala ord
// IF startord NOT IN ordbok OR slutord NOT IN ordbok THEN
//     PRINT "Fel: Ett eller båda orden finns inte i ordboken."
//     END
// END IF

// // Spel-loop
// WHILE startord ≠ slutord DO
//     PRINT "Ange en ny bokstav:"
//     INPUT nyBokstav
//
//     //Byta bokstav i startord
//    SET NyttOrd =  CALL FUNCTION BYTABOKSTAV(nyBokstav)
//
//     // Kontrollera att nyBokstav finns i ordbok
//     IF NyttOrd NOT IN ordbok THEN
//         PRINT "Fel: Ordet finns inte i ordboken."
//         CONTINUE
//     END IF

//     // Kontrollera att endast en bokstav har ändrats
//     IF räknaBokstavsskillnad(startord, NyttOrd) ≠ 1 THEN
//         PRINT "Fel: Du får bara ändra en bokstav."
//         CONTINUE
//     END IF

//     // Uppdatera startord
//     SET startord = NyttOrd
// END WHILE

// // Slutet av spelet
// PRINT "Grattis! Du har omvandlat ordet korrekt."

//     //Funktion att byta bokstav
//      FUNCTION BYTABOKSTAV
//        Byter boktstav i en specefik plats i ordet
//        returnerar nytt ord
//      END FUNCTION
// END
