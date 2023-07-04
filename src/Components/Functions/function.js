// https://drive.google.com/file/d/1ses2VtkMl_8bzwViHhgXZi7P7fcfykTE/view?usp=sharing        this is direct google drive link 

// https://drive.google.com/uc?export=download&id=1ses2VtkMl_8bzwViHhgXZi7P7fcfykTE            this is download link from google drive
export const downloadResume=()=>{
    window.open("https://drive.google.com/file/d/1_Y2Cp4-Cwk68vt5v-SR6XSD4cnxlgbAS/view?usp=sharing","_blank")
    const fileURL = "https://drive.google.com/uc?export=download&id=1_Y2Cp4-Cwk68vt5v-SR6XSD4cnxlgbAS";
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.click();
}

