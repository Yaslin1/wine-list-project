const currentYear= new Date().getFullYear();
const gitHubUrl = "https://github.com/Yaslin1";

export default function () {
    
    return(
        <footer>
            <p>&copy;{currentYear}</p>
            <p><a href={gitHubUrl} target="_blank" rel="noreferrer"></a>See Code in Github</p>
        </footer>
    )
}