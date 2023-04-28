function ModeToggle (){
    const darkModeOn = false;
    const darkMode = <h1>Dark Mode On</h1>;
    const lightMode = <h1>Light Mode On</h1>;

    return(
        <div>{darkModeOn ? darkMode : lightMode }</div>
    );

}
export default ModeToggle;