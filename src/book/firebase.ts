import * as admin from 'firebase-admin'

admin.initializeApp({
    credential: admin.credential.cert({
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCVwnOlkyhzst7U\nyDGNfaPQvdQR1NBIVz5oMBwgBSM/7qSUe1zO7l95tuQ3BAz7jMfOgiChl4T+fD9Z\nfRNnIOdFB7YoAvbWBDemKnt4KIaoiltLAJ0GmJgXzKjCub8xDslRubQXmNCAw612\nIM/NfmG8Hk/2FB3OYtiQPzr3ppn66URh36RPOvSe9rSspkWdYFyTJG8iU95q32JW\nr1Vgwra+6p4efQ1Bvqc3dSF36epD84ojztZMlVR5tirtBcTDQAoA1mn5+zQPdQpF\n6QH5wcPRxoz57f6RiVqITEYtNn5biHH0vNBzR22AbeC8uLIJ3HwrpiLijYBPCFQb\nYdw8NlcXAgMBAAECggEAOjinKiM8UkKjY7jSnu3N7nymQiposP8N+YZeoMouio/V\n9w3ApohAoPqL3aGbBH6WPUAUvI3B/AfEvx8jmG/PyWP2mraQTOLF2blhV/T1aPel\nB1MdOO/BDVuY7l81J7bWaInYLGZSBQVN3gNilkLAb1ifgI0Qi2idRfL3E0l3Snam\nQQXUbMcDGSLYf9yVArqwWBExrgfQ5ZyE2+DzbmgjUFg6HR46ksl8/xZli7QSaAv3\nfCwhpYuXbbnG+8A6FyFoe6MbJE85vJOmZc6Ymz4oOc+UT4YKAGhmV+5pho+IGvNW\nxxcL7o7euyNaE74mz91V16DiWt2kUtpK5YUKfHqu1QKBgQDITJqu+IifmPGDBAPn\nryftr4/KN+PO4Ezxw1wZ6YQRcuL/6e/+O9B1+Mcbw01eKR3MqlY8/tooWfuVAXkP\nyAmi5JkhbLPPsFFNqxBUFqzdvEnOtlCu01YBhh8JA/XCXKMApck+lXU1jJSzTwgv\nCYztOyOdX1pZwOCz2uarSwHwGwKBgQC/Z+fd93cbdr7wbpzxREbhiRnQUxWd/4Xe\n0dqSTzQ4EFDhkQgQyU/nPOMofA1JSA+TBYjgvvYOnZ/STnJooqhAgbM11sJKNuef\nJoeHrBpilxWVF7pLNkV8e8qWDFwz/D/PKNejEnU9SGI8XQh9HPSLWQnnfCgKff3u\nO961XEf8tQKBgQCBjjsHLa6BPJYKXlCATSUQclwZOmlZaG+cePZbtFU+TAdT7GbV\nFK9TfySaaoriesnRlePN9DH7o6g8ywUZFhRVjnMV0Y/EqJEOIbWgDkKl8aHz2Kz7\nR6r7tVrho/QUUYMFajZvCpETn+iWymnKsuy6jWQN6J0yLLWq384PwaZxPQKBgB56\nqU2LTogtDJK0yoEQ4kif0GCAGn0iZ2rn9+o8epBC6N5CfgpORE8KPxH/Tw5QT0qW\nIwnG3t/M8dpHa6iF3k0HWkZEgIPY4mFRfVt5aGoyrNklAiFf7wi3nbbvGO+eR3rx\nggURt2Ge2SXLmsJxje9yqkUWXDnvfjQljH1MyJnRAoGAGwJ42U4PBMrYhB5rJEEz\nsOhJ92QSX1nHZCABY81FeovPsyQVmaJCzSKB9cDbgvjeB+84lleWm91Z9+GFn0ib\noZToNMemxQSqDuRQhRW0PMG2MlR1SgaTjM6oWUbZ1v66XQOuX6SVrCAwSNXRIuNL\nieQL+PDINH/04T2gbhhyvLo=\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-8yqnb@tsvetkov-project.iam.gserviceaccount.com",
        project_id: "tsvetkov-project"
      } as Partial<admin.ServiceAccount>),
//    credential: admin.credential.cert(path.join(__dirname, 'apikey.json')),
    databaseURL: "https://mynetology-default-rtdb.europe-west1.firebasedatabase.app"
});
  

//console.log(admin.SDK_VERSION,"app");

export const db = admin.firestore();
