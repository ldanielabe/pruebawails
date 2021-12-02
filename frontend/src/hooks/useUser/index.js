// Dependecies
import { useState } from 'react';

function useUser(reset) {


	const [result, setResult] = useState(null);

    const onSubmit = data => {
      window.backend.basic(data.name).then((result) => setResult(result));
      reset();
      
    }

      return {
        onSubmit,
        result
      };
}

export default useUser;
