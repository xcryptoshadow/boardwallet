import clsx from "clsx";
import List from "components/list/List";
import ListItem from "components/list/ListItem";
import ListItemIcon from "components/list/ListItemIcon";
import ListItemText from "components/list/ListItemText";
import PrimaryButton from "components/PrimaryButton/PrimaryButton";
import { useAppSelector } from "store/hooks";

import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import {
  dispatchTestamentCreationInfo,
  getTestamentCreationInfo,
} from "store/reducers/testamentCreationInfo";
import { PlanSelection as MenuItemsPlanSelection } from "utils/constants/PlanSelection";
import menuItems from "utils/menuItems";

interface Props {
  stepperClassName?: string;
  renderStepper: Function;
  onNextStep: Function;
}

const PlanSelection = ({
  stepperClassName,
  renderStepper,
  onNextStep,
}: Props) => {
  const dispatch = useDispatch();

  const testamentCreationInfo = useAppSelector(getTestamentCreationInfo);

  async function handleClick() {
    if (
      testamentCreationInfo.selectedPlan === MenuItemsPlanSelection.INHERITANCE
    ) {
      onNextStep();
    }
  }

  return (
    <>
      <div className={`${stepperClassName || ""}`}>
        {renderStepper()}
        <span className="my-7 inline-block text-sm lg:my-11 lg:text-base">
          Select the protection plan you want to create:
        </span>
        <List className="grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-2">
          {Object.entries(menuItems.Protection.subMenu)?.map(
            ([, { icon, title, description, alt, comingSoon, planId }]) => {
              return (
                <React.Fragment key={title}>
                  <ListItem
                    isSelected={testamentCreationInfo.selectedPlan === planId}
                    classNameInnerDiv="!gap-2 !px-4"
                    onClick={() => {
                      dispatch(
                        dispatchTestamentCreationInfo({
                          ...testamentCreationInfo,
                          selectedPlan: planId,
                        })
                      );
                    }}
                    className={clsx(
                      testamentCreationInfo.selectedPlan !== planId &&
                        "!gap-2 rounded-3xl border-2 border-gray-200 px-5 py-3",
                      "relative cursor-pointer"
                    )}
                  >
                    <ListItemIcon className="h-14 w-14 shrink-0 lg:h-16 lg:w-16 xl:h-24 xl:w-24">
                      <Image
                        src={icon}
                        width={96}
                        height={96}
                        objectFit="contain"
                        alt={alt}
                      />
                    </ListItemIcon>
                    <ListItemText
                      title={title}
                      description={description}
                      className="!gap-2"
                    />
                    {comingSoon && (
                      <div
                        className={clsx(
                          "absolute right-3 top-[-14px] rounded-lg bg-blue-900 px-3.5 py-1.5 text-[8px] lg:top-[-16px] lg:px-5 lg:py-2 xl:top-[-18px] xl:px-6 xl:py-2.5",
                          "font-bold text-white"
                        )}
                      >
                        Coming Soon
                      </div>
                    )}
                  </ListItem>
                </React.Fragment>
              );
            }
          ) ?? ""}
        </List>
        <div className="mt-12 flex w-full justify-center">
          <PrimaryButton
            text={"Continue"}
            disabled={
              testamentCreationInfo.selectedPlan !==
              MenuItemsPlanSelection.INHERITANCE
            }
            className={"!px-10 !py-2 lg:!px-14 lg:!py-4"}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default PlanSelection;
