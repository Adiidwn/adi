
let dataProject = []
const submitProject = (event) =>{
    event.preventDefault()
    let projectname = document.getElementById("projectname").value
    let startdate = document.getElementById("startdate").value
    let enddate = document.getElementById("enddate").value
    let description = document.getElementById("description").value
    let nodejs = document.getElementById("nodejs").value
    let reactjs = document.getElementById("reactjs").value
    let nextjs = document.getElementById("nextjs").value
    let typescript = document.getElementById("typescript").value
    let myFile = document.getElementById("myFile").files
    
    let firstDate = new Date(startdate)
    let lastDate = new Date(enddate) 
    let gapDate = lastDate - firstDate
    
    

    let distanceSeconds = Math.floor(gapDate / 1000)
    let distanceMinutes = Math.floor(distanceSeconds / 60)
    let distanceHours = Math.floor(distanceMinutes / 60)
    let distanceDay = Math.floor(distanceHours / 24)
    let distanceMonth = Math.floor(distanceDay / 30)
    let distanceYear = Math.floor(distanceMonth / 12)

    console.log("jam",distanceSeconds)
    let distanceDuration =""
    if (gapDate > 0) {
        distanceDuration= `${distanceMinutes} menit`
    } else if (distanceMinutes >= distanceHours) {
        distanceDuration= `${distanceHours} jam`
    } else if (distanceHours >= distanceDay) {
        distanceDuration= `${distanceDay} hari `
    } else if (distanceDay >= distanceMonth) {
        distanceDuration= `${distanceMonth} bulan`
    } else if (distanceMonth >= distanceYear) {
        distanceDuration= `${distanceYear} tahun `
    }

    console.log("HARI",distanceDuration)

    const nodejsIcon = '<i class="fa-brands fa-node-js"></i>'
    const reactjsIcon = '<i class="fa-brands fa-react"></i>'
    const nextjsIcon = '<i class="fa-brands fa-jsfiddle"></i>'
    const typescriptIcon = '<i class="fa-solid fa-scroll"></i>'

    if (projectname === "") {
        return false('Project harus diisi!')
    } else if (startdate === "") {
        return alert('Start Date harus diisi!')
    } else if (enddate === "") {
        return alert('End Date harus diisi!')
    } else if (description === "") {
        return alert('Description harus diisi!')
    } else if (myFile === "") {
        return alert('File harus diisi!')
    }

   
// untuk membuat object file menjadi URL secara sementara, agar tampil
myFile = URL.createObjectURL(myFile[0])

    let project = {
            projectname,
            startdate,
            enddate,
            description,
            myFile, // bentuknya blob url (sementara)
            distanceDuration,
            nodejsIcon,
            reactjsIcon,
            nextjsIcon,
            typescriptIcon,
        }
    dataProject.push(project)
    renderSubmit()

    console.log(dataProject)
}

const renderSubmit = () =>{
    document.getElementById("contents").innerHTML = ''
    
    for (let index = 0; index < dataProject.length; index++) {
        document.getElementById("contents").innerHTML += 
    `
    <div id="contents" class="cardProject">
    <!-- ISI PROJECT -->
    <div class="projectItem">
        <img src="${dataProject[index].myFile}" class="projectImage"/>
    <!-- IMAGES -->
        <div class="imageProject" >${dataProject[index].projectname}</div>
    <!-- TITLE -->
        <div class="dateProject">${dataProject[index].distanceDuration}
        </div>
    <!-- DURASI -->
        <div class="contentProject">
            ${dataProject[index].description}
        </div>
    <!-- ISI CONTENT -->
        <div class="iconProject">
        ${dataProject[index].nodejsIcon}
        ${dataProject[index].reactjsIcon}
        ${dataProject[index].nextjsIcon}
        ${dataProject[index].typescriptIcon}
        </div>
    <!-- ICON -->
        <div class="btnMother">
            <div class="btnFather">
                <button class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
            </div>
    <!-- BUTTON -->
    </div>
     `
    }
}

// setInterval(() => {
//     renderBlog()
// }, -1000)