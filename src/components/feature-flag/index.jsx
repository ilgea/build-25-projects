import Accordion from "../accordions";
import TicTacToe from "../tic-tact-toe";
import RandomColor from "../random-color";
import TreeView from "../tree-view";
import LightDarkMode from "../light-dark-mode";
import TabTest from "../custom-tabs/tab-test";
import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data"

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
        key: "showTabs",
        component: <TabTest /> 
    }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h2>Loading Data! Please Wait.</h2>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
