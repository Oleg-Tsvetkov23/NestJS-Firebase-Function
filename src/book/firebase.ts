import * as admin from 'firebase-admin'

admin.initializeApp({
    credential: admin.credential.cert({
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCkaAN3Lf1CB9iP\nAK2d4JBnvNUCH37VvVz5SkxEF5jc37aCO4GNV4f/tffPJyogaA6fON0Daocgw4sx\n2R5P/0/GvBd64bqhW8CcG/yC+VImQdjn9xacDAsSlkG69wKq74IgDjB6pBoZfABR\n8GwfVSp3MmjThMWQZ0g7f2dMbF7jDT2cIUul/Vq0GHb7qAv1lmES/utJYxjdAHgj\n2X70sdtpJWdanou5tnLLOrSDzNT9abzkqoYxrXI/m9loATXMOhFo1MZO9ZvpQSTf\n0I4tbmor3YbrYn36czDUF+14S5exmX2QsOWBB3cAEu5ooZ8lqWGL5yLdLZAsn1ha\nL2QhX7XzAgMBAAECggEANOHyL20/F/S/H2yH7A8WVBAE8kxgN29UTymrc4GlnXJm\nWei7KNQ9fi6xmdQOtGLURTn8uYMUGSFdDjk5C2Fj71iEMvYV2p5RS8WiyRxaZMzs\ncNzlTGeBTka/uNyIYqRs1lPKG0Da1lSxI6oylTeHU9UGq/b6t5LJRL4b45S+Rsjx\nALjf0+dEyGp1RtlOcefUnvTd3UVoWwY5p1Z67REiNQlG8px08fBgEdFbcKriA2hD\nJBlio7Azv/heEkH5OjVEVLIqjezEyPIsaFy/LOBf7J3cEmOGrZYKNVQ70aOtYfF8\n1FexYH3td2LidR/UJ2Dj2fIigy+LfvKhPDuImLa76QKBgQDSez602du5niiLHpYu\n+V7cDG8hp7UFw3sTwmtB+ooeEskq8VTkZTT0OlNiSCHavMcmjUVtaSfooqw8EgTe\n6SWaCrdwkwh5sQb51AtOwV1Hqv1tLaP472Ek+D4vWzV2MWzQeITbRjxc9tvlelBF\nTBb3xEeZyBGHpOBkV7Ixe6ngCQKBgQDH9fCKtGnBfVDETQ3Q05qvxM1urx0qarbg\nXonqxK9PoIeNtcusAC48TOR22k/rkrG/lXZR8BH7mAQq7SvC+MmLOr7VeyJxZTof\nEMi4b1ImUqJKsLmIp5pgY18TNrXOE5dYVoTHbgTQ8zZFjzJva8pSL6XxILGxXgk8\nPlMxr1etGwKBgHTaN1XwHSxPwfJ6aKZri15fCNOGZ9lrTUkLBsD6dvN7OnO8x4SF\nK4DrYJ+PrDvj0ix1AbZcSuu8ZCJ1Xn7isR10FaNJ/cqRnW3VavGuKDtBkrCqRf5N\n54C+0Mc5u9SCXAbg4eFafOifpDUiUq4mMBodviKCEDleL7WFekg+f3EBAoGBAIJz\nRVkH+BJ98aoO5tt8oObYinkSDwH0GphntKwPYpudC7H8jwIIICHAvC95nzf9PK7T\nEBzGdMThWJ60mZ8Z9Uo6qfLV4RN/SZqotXn1Te+oay40+uVXClSln4oGYDcv+sVr\ntDXy5Xt3n8ljcTDVbmmNokGb5bDjuzytIFNCo/1PAoGAENVp1MGMaFO1j22JVQRw\nP6zEQjQV8+FsIm68pXmoGOWQi0zAQfWCqnJ/pUhydmiPzUMmiZTk4NIIYpcDnxNa\ncLmTGSazJ2aEVSJa43bye+952EVIyXzuFrbRLgI2rPOE1zL8I619SSQrPJiSPgFu\nK9SOeG2ga9Uan5v18kLFn0E=\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-ujc2m@mynetology.iam.gserviceaccount.com",
        project_id: "mynetology"
      } as Partial<admin.ServiceAccount>),
//    credential: admin.credential.cert(path.join(__dirname, 'apikey.json')),
    databaseURL: "https://mynetology-default-rtdb.europe-west1.firebasedatabase.app"
});
  

//console.log(admin.SDK_VERSION,"app");

export const db = admin.firestore();
