(function(){var Dom=YAHOO.util.Dom,Event=YAHOO.util.Event;var $html=Alfresco.util.encodeHTML,$combine=Alfresco.util.combinePaths;YAHOO.Bubbling.fire("registerAction",{actionName:"onActionEsign",fn:function DL_onActionGeotag(asset){var nodeRef=asset.nodeRef,displayName=asset.displayName,actionUrl=Alfresco.constants.PROXY_URI+$combine("slingshot/doclib/action/execute-script/node",nodeRef.replace(":/",""));this.modules.executeScript=new Alfresco.module.SimpleDialog(this.id+"-executeScript").setOptions({width:"30em",templateUrl:Alfresco.constants.URL_SERVICECONTEXT+"extras/modules/documentlibrary/alfresco-esign",actionUrl:actionUrl,firstFocus:this.id+"-executeScript-script",onSuccess:{fn:function dlA_onActionExecuteScript_success(response){Alfresco.util.PopupManager.displayMessage({text:this.msg("message.execute-esign.success",displayName)});},scope:this},onFailure:{fn:function dlA_onActionExecuteScript_failure(response){Alfresco.util.PopupManager.displayMessage({text:this.msg("message.execute-esign.failure",displayName)});},scope:this},doSetupFormsValidation:{fn:function dlA_onActionExecuteScript_doSetupFormsValidation(p_form){},scope:this}});this.modules.executeScript.show();}});})();