export const isValidObjField=(obj) => {
    return Object.values(obj).every(value => value.trim())
};

export const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
        stateUpdater('')
    }, 2500);
};

export const updateMsg = (msg, stateUpdater) => {
    stateUpdater(msg);
    setTimeout(() => {
        stateUpdater('');
    }, 5000);
  };

export const isValidEmail = (value) => {
    //const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regx.test(value)
};