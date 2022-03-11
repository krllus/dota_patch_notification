const notifier = require('node-notifier');

// test notification
createTestNotification();

const patch_out = async () => {

    let res = await fetch('https://www.dota2.com/datafeed/patchnotes?version=7.31&language=english')
    
    let suc = JSON.parse(await res.text())['success']
    if (suc) {
        notifier.notify('Patch is out!');
    } else {
        console.log('Not yet...')
    }
}

function createTestNotification(){
    notifier.notify(
        {
          title: 'Patch is Out',
          message: 'THE PATCH IS OUT',          
          sound: true          
        }
      );
}

setInterval(patch_out, 15000)