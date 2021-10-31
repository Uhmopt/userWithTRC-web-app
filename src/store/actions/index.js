import auth from './auth';
import home from './home';
import payment from './payment';

const actions = {
    auth: auth,
    home: home,
    upgrade: payment
}
export default actions