import { auth, db } from '../../firebaseConfig';
import { doc, addDoc, collection, query, onSnapshot, updateDoc, deleteDoc, where } from "firebase/firestore";

export const getTarefasFirebase = async (setListaObjetos) => {
    try {
        const q = query(collection(db, 'tarefa'))
        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                Nome: doc.data().Nome,
                Local: doc.data().Local,
                Status: doc.data().tipo,
                usuario: doc.data().usuario,
                email: doc.data().email,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}

export const getTarefasUIDFirebase = async (uid, setListaObjetos) => {
    try {
        const colRef = collection(db, "tarefa");
        const q = query(colRef, where("uid", "==", uid))
        onSnapshot(q, (querySnapshot) => {
            setListaObjetos(querySnapshot.docs.map(doc => ({
                id: doc.id,
                Nome: doc.data().Nome,
                Local: doc.data().Local,
                Status: doc.data().tipo,
                usuario: doc.data().usuario,
                email: doc.data().email,
                uid: doc.data().uid
            })))
        })
    } catch (err) {
        throw err;
    }
}

export const deleteTarefaFirebase = async objeto => {
    try {
        const TarefaDocRef = doc(db, 'tarefa', objeto.id)
        await deleteDoc(TarefaDocRef);
    } catch (err) {
        throw err;
    }
}

export const addTarefaFirebase = async objeto => {
    try {
        let ret = await addDoc(collection(db, 'tarefa'),
            {
                Nome: objeto.Nome,
                Local: objeto.Local,
                Status: objeto.Status,
                uid: objeto.uid,
                usuario: objeto.usuario,
                email: objeto.email
            }).then(function (docRef) {
                objeto = { ...objeto, id: docRef.id };
                return objeto;
            });
        return ret;
    } catch (err) {
        throw err;
    }
}

export const updateTarefaFirebase = async objeto => {
    try {
        const TarefaDocRef = doc(db, 'tarefa', objeto.id)
        await updateDoc(TarefaDocRef, {
            Nome: objeto.Nome,
            Local: objeto.Local,
            Status: objeto.Status,
            uid: objeto.uid,
            usuario: objeto.usuario,
            email: objeto.email
        })
    } catch (err) {
        throw err;
    }
}



