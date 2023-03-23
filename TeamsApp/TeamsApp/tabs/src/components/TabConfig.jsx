import React from "react";
import "./App.css";
import { app, pages } from "@microsoft/teams-js";


/**
 * The 'Config' component is used to display your group tabs
 * user configuration options.  Here you will allow the user to
 * make their choices and once they are done you will need to validate
 * their choices and communicate that to Teams to enable the save button.
 */
class TabConfig extends React.Component {
  render() {
    // Initialize the Microsoft Teams SDK
    app.initialize().then(() => {
      /**
       * When the user clicks "Save", save the url for your configured tab.
       * This allows for the addition of query string parameters based on
       * the settings selected by the user.
       */
      //usuario  e senha
      //token
      //get projetos
      //obter o subdomino
      
      pages.config.registerOnSaveHandler((saveEvent) => {
        const baseUrl = `https://${window.location.hostname}:${window.location.port}`;
        pages.config.setConfig({
          suggestedDisplayName: "My Tab",
          entityId: "connectoruid",
          contentUrl: baseUrl + "/index.html#/tab",
          websiteUrl: baseUrl + "/index.html#/tab",
          scopes: ['team', 'groupchat', 'personal']
        }).then(() => {
          saveEvent.notifySuccess();
        });
      });

      app.getContext().then((context: Context) => {
        /*...*/
        console.log(context)
        console.log(pages.config)
        console.log("passou aqui")
        console.log(context.userRole)
        console.log(context.subEntityId)
      });
  

      /**
       * After verifying that the settings for your tab are correctly
       * filled in by the user you need to set the state of the dialog
       * to be valid.  This will enable the save button in the configuration
       * dialog.
       */
      pages.config.setValidityState(true);
    });

    app.getContext().then((context: Context) => {
      /*...*/
      console.log(context)
      console.log(pages.config)
      console.log("passou aqui")

      console.log(context.subEntityId)
    });

    return (
          <div className="login-panel">
              <div className="login-header">
              Bem Vindo!
              </div>
              <div className="login-body" >
                  <div className={"login-description theme-"}>Realize o login informando as credenciais já fornecidas</div>
                  <input className="login-input" label="Login"  placeholder="Login"></input>

                  <input type="password" className="login-input" label="Senha" placeholder="Senha" ></input>

                  <input className="login-input" label="Servidor dedicado" placeholder="xxxxx-xxxx-xxxxx-xxxxx-xxx"></input>
                  <button autoFocus className="login-button">Entrar</button>
              </div>
          </div>
    );
  }

  
}

export default TabConfig;
