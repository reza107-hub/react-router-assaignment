
const addToDb = id => {
    let appliedJob = getAppliedJob();
    // add quantity
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}


const getAppliedJob = () => {
    let appliedJob = {};

    //get the shopping cart from local storage
    const storedAppliedJob = localStorage.getItem('applied-job');
    if (storedAppliedJob) {
        appliedJob = JSON.parse(storedAppliedJob);
    }
    return appliedJob;
}


export {
    addToDb,
    getAppliedJob,
}