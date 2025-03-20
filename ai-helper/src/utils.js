


const handleCreateUserWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('User created successfully');
        navigate('/', { replace: true });
    } catch (error) {
        console.log(error);
    }
};

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        // console.log(result.user); 
        alert("Signed in successfully");
        navigate('/', { replace: true });
    } catch (error) {
        console.error("Error signing in with Google:", error.message);
    }
};