import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function useContent(target) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    getDocs(collection(db, target))
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return { [target]: content };
}
