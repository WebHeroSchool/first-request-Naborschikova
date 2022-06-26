
let information = setTimeout(function loadScript() {fetch('https://api.github.com/users/lisaredfox')
    .then (res => res.json())
    .then (json => {
        let photo = json.avatar_url;
        let picture = document.createElement('img');
        document.body.append(picture);
        picture.src = photo;

        let wrapper = document.createElement('p');
        document.body.append(wrapper);
        
        let name = json.name;
        let userName = document.createElement('a');
        userName.href = json.html_url;
        wrapper.append(userName);
         if (name == null){
            userName.innerHTML = 'Elizaveta Naborschikova'}
            else if (name == undefined){
                userName.innerHTML = 'Elizaveta Naborschikova'}
                else {userName.innerHTML = name};            

        let description = json.bio;
        let userDescription = document.createElement('p');
        document.body.append(userDescription);
         if (description == null){
            userDescription.innerHTML = 'ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ НЕДОСТУПНА'}
            else if (description == undefined){
                userDescription.innerHTML = 'ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ НЕДОСТУПНА'}
            else {userDescription.innerHTML = description};
    })
    .finally(() => {let preload = document.querySelector('.spinner');
                    preload.classList.add('hide')})}, 3000)

    let today = new Promise(() => {setTimeout(() => console.log(new Date), 2000)});

  Promise.all([information, today]).then(() => [information, today])

