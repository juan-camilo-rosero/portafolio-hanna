/*Login:

- Función llamada getHash que obtenga el hash del usuario ingresado
- Función llamada generateHash que convierta la contraseña ingresada a un hash
- Función llamada compareHash que compare los hash y retorne true si son iguales y false si son diferentes

const passwords = {
    "hanna": "908bcb55a0d8e7d9fbaa40c8d1441db4044e6fe1453f03432bbe5dd91830b2eb",
    "jc": "699bdc4b94e73b468de80b377d1699e4bc09dda07d9e856c3152ea727ecc10fb",
    "jcPs": "uwunt",
    "sergio": "43cae2eafda4d7a9b31768c8a6f086d7942e97d3a96c75326b3a1f4b17b1cffd"
}

const getHash = k => {
    return passwords[k]
}

const realPassword = getHash("hanna")

async function createHash(str) {
    const encoder = new TextEncoder(),
    data = encoder.encode(str);
    return crypto.subtle.digest("SHA-256", data).then(hashBuffer => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
    });
}

async function generateHash(str) {
    const userPassword = await createHash(str);
    console.log(str);
    console.log(userPassword);
    console.log(passwords.hanna);
}

generateHash("owo")

async function compareHash(user, password) {
    const realPw = getHash(user),
    userPw = await createHash(password)

    return realPw == userPw
}

compareHash("hanna", "SoyUnaContraseña").then(result => {
    console.log("ingreso: " + result);
})


/*async function generateHash() {
    uwunt = await createHash(passwords["hanna"]);
    console.log(uwunt);
    console.log(passwords["hanna"]);
}

generateHash()*/