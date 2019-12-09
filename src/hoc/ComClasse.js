import React from 'react';



const comClasse = (ComponenteEnvolvido, nomeClasse) => {
   return props => (
     <div className={nomeClasse}>
        <ComponenteEnvolvido/>
     </div>
   );
};


export default comClasse;