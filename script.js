JavaActivated = false;
CActivated = false;
PythonActivated = false;
ResearchActivated = false;


function displayJavaInfo()
{
    if(JavaActivated)
    {
        ele = document.getElementById("Javainfo");
        ele.innerHTML = "<h2>Java Projects<h2>";
        JavaActivated = !JavaActivated;
    }
    else
    {
        ele = document.getElementById("Javainfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        JavaActivated = !JavaActivated;
    }
}
function displayCInfo()
{
    if(CActivated)
    {
        ele = document.getElementById("Cinfo");
        ele.innerHTML = "<h2>C/C++ Projects<h2>";
        CActivated = !CActivated;
    }
    else
    {
        ele = document.getElementById("Cinfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        CActivated = !CActivated;
    }
}
function displayPythonInfo()
{
    if(PythonActivated)
    {
        ele = document.getElementById("Pythoninfo");
        ele.innerHTML = "<h2>Python/Ruby Projects<h2>";
        PythonActivated = !PythonActivated;
    }
    else
    {
        ele = document.getElementById("Pythoninfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        PythonActivated = !PythonActivated;
    }
}
function displayResearchInfo()
{
    if(ResearchActivated)
    {
        ele = document.getElementById("Researchinfo");
        ele.innerHTML = "<h2>Research Paper<h2>";
        ResearchActivated = !ResearchActivated;
    }
    else
    {
        ele = document.getElementById("Researchinfo");
        ele.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>";
        ResearchActivated = !ResearchActivated;
    }
}