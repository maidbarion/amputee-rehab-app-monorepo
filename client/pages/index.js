import buildClient from '../api/build-client';

const LandingPage = ({ currentuser }) => {
    console.log(currentuser);
    return currentuser ? <h1>You are signed in</h1> : <h1>You are not signed in</h1>;
};

LandingPage.getInitialProps = async (context) => {
    const { data } = await buildClient(context).get('/api/users/currentuser');
    return data;
};

export default LandingPage;
