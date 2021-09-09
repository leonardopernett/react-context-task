import '../sass/index.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Hedding from 'components/hedding'
import Form from 'pages/form-task/form'
import List from 'pages/list-task/list'
import { ContextProvider } from 'context/GlobalContext';

function App() {
    return (
        <>
         <div className="h-screen">
            <div className="container h-full p-5 text-white">
  
                   <ContextProvider>
                    <Hedding />
                        <Switch>
                            <Route exact path="/task-list" component={List}  />
                            <Route path="/task-form" component={Form}  />
                            <Route path="/edit/:id" component={Form}  />
                            <Redirect from="" to="/task-list" />
                        </Switch>
                   </ContextProvider>
            </div>
         </div>
        </>
    );
}

export default App;
