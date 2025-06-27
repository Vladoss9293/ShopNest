import { useElementVisibility } from "@/shared/lib/hooks/use-element-visibility";
import { useState } from "react";
import { productTabsData } from "../model/constants";
import { Tabs } from "@/shared/ui/kit/tabs";

/**
 * Компонент фиксированного заголовка с табами для страницы товара.
 *
 * Отображает список табов (разделов товара) и следит за прокруткой,
 * добавляя тень, когда заголовок закрепляется (sticky).
 *
 * Также вызывает callback при клике на таб.
 *
 * Использует хук useElementVisibility для определения,
 * когда элемент уходит за верхний край вьюпорта.
 *
 * @param {Object} props
 * @param {(id: number) => void} props.onTabClick - Функция обратного вызова при клике на таб. 
 * Получает id выбранного таба, после чего якорем перекидывает на секцию.
 * @returns {JSX.Element}
 */

export function ProductLayoutHeader({
  onTabClick,
}: {
  onTabClick: (id: number) => void;
}) {
  const { ref, isTopHidden } = useElementVisibility();
  const [isSelectTabs, setIsSelectTabs] = useState(1);

  return (
    <>
      <div
        ref={ref}
        className="opacity-0 pointer-events-none"
      />

      <div
        className={`sticky -top-[1px] z-50 w-full h-20 grid grid-cols-[1fr_1.2fr_1.2fr_1fr_1fr_1fr]
          font-sans text-md transition-shadow ${isTopHidden ? "shadow" : ""}`}
      >
        {productTabsData.map((tab) => {
          return (
            <Tabs
              key={tab.id}
              onClick={() => {
                setIsSelectTabs(tab.id);
                onTabClick(tab.id);
              }}
              className={
                tab.id === isSelectTabs
                  ? "bg-white hover:bg-gray-200 border-b-4 border-green-600"
                  : "bg-white text-black/50 hover:bg-gray-100"
              }
              isFirst={tab.id === 1 && true}
              text={tab.text}
            />
          );
        })}
      </div>
    </>
  );
}