// Dependecies
import React from 'react';

function useUser() {

    // const onSubmit = (data) => {
    //     try {
    //         console.log("DATA:: ", data);
           
    //     } catch (e) {
    //       reject();
    //     }
    // };

    function onSubmitUser(data){ console.log(data); }

      return {
        onSubmitUser
      };
}

export default useUser;
