import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
  } from "firebase/firestore";

export default class ProfessorService {
    static list = (db, callback) => {
        getDocs(collection(db, "professores"))
            .then((snapshot) => {
                const professores = [];
                snapshot.forEach((document) => {
                    const id = document.id;
                    const { nome, curso, salario } = document.data();
                    professores.push({ id, nome, curso, salario });
                });
                callback(professores);
            })
            .catch((error) => console.log(error));
    };

    static create = (db, callback, professor) => {
        addDoc(collection(db, "professores"), professor)
            .then((docRef) => {
                callback(docRef.id);
            })
            .catch((error) => console.log(error));
    };

    static getProfessor = (db, callback, id) => {
        getDoc(doc(db, "professores", id))
            .then((docSnap) => {
                if(docSnap.exists()){
                    callback(docSnap.data());
                }
            })
            .catch((error) => console.log(error));
    };

    static update = (db, callback, id, professor) => {
        updateDoc(doc(db, "professores", id), professor)
            .then(() => {
                callback();
            })
            .catch((error) => console.log(error));
    };

    static delete = (db, callback, id) => {
        deleteDoc(doc(db, "professores", id))
            .then(() => callback(true))
            .catch((error) => console.log(error));
    };
}