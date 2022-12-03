import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
  } from "firebase/firestore";

export default class EstudanteService {
    static list = (db, callback) => {
        getDocs(collection(db, "estudantes"))
            .then((snapshot) => {
                const estudantes = [];
                snapshot.forEach((document) => {
                    const id = document.id;
                    const { nome, curso, ira } = document.data();
                    estudantes.push({ id, nome, curso, ira });
                });
                callback(estudantes);
            })
            .catch((error) => console.log(error));
    };

    static create = (db, callback, estudante) => {
        addDoc(collection(db, "estudantes"), estudante)
            .then((docRef) => {
                callback(docRef.id);
            })
            .catch((error) => console.log(error));
    };

    static getEstudante = (db, callback, id) => {
        getDoc(doc(db, "estudantes", id))
            .then((docSnap) => {
                if(docSnap.exists()){
                    callback(docSnap.data());
                }
            })
            .catch((error) => console.log(error));
    };

    static update = (db, callback, id, estudante) => {
        updateDoc(doc(db, "estudantes", id), estudante)
            .then(() => {
                callback();
            })
            .catch((error) => console.log(error));
    };

    static delete = (db, callback, id) => {
        deleteDoc(doc(db, "estudantes", id))
            .then(() => callback(true))
            .catch((error) => console.log(error));
    };
}