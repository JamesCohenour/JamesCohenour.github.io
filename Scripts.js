var articles = new Array('Dungeon', 'Future', 'About');

function show(id)
{
    for(i=0; i < articles.length; i++)
    {
        if(articles[i] === id)
        {
            document.getElementById(articles[i]).style.display = 'block';
        }
        else
        {
            document.getElementById(articles[i]).style.display = 'none';
        }
    }
}