import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { doc, getDoc, documentId, where } from "firebase/firestore";

export default function Dashboard({ logout }) {
  const navigate = useNavigate();
  // const person = auth.currentUser;
  // const q = query(
  //   collection(db, "users"),
  //   where(documentId(), "==", person.uid)
  // );

  const [user, setUser] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  useEffect(() => {
    async function fethData() {
      // const querySnapshot = await getDoc(q);
      // querySnapshot.forEach((doc) => {
      //   setUser(doc.data());
      // });

      const docRef = await doc(db, "users");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
      }
    }
    fethData();
  }, []);

  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              My Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 p-6 rounded-lg border-4 border-dashed border-gray-200">
                <div className="mt-10">
                  <h3 className="text-lg font-semibold">
                    Hello {user.fname} ,
                  </h3>
                  <div className="flex md:flex max-w-full justify-between border-b border-gray-300">
                    <div className="h-28 w-full m-4 p-4 rounded-xl  bg-violet-700">
                      <p className="font-bold text-gray-100">My Earnings</p>
                      <p className="text-4xl font-extralight my-3 text-gray-100">
                        ₦ 32,000,000.76
                      </p>
                    </div>

                    <div className="h-28 w-full m-4 p-4 rounded-xl  bg-violet-700">
                      <p className="font-bold text-gray-100">
                        Total Sales Made
                      </p>
                      <p className="text-4xl font-extralight my-3 text-gray-100">
                        ₦ 320,000,000.76
                      </p>
                    </div>
                    <div className="h-28 w-full m-4 p-4 rounded-xl  bg-violet-700">
                      <p className="font-bold text-gray-100">Total Downlines</p>
                      <p className="text-4xl font-extralight my-3 text-gray-100">
                        16
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={logout}
                    className="flex mx-auto mt-4 p-6 rounded-xl bg-yellow-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
