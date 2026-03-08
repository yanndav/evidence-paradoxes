"use client";
import React from "react";
import { useScrollSpy } from "@/hooks/home/useScrollSpy";
import Menu from "./Menu";

const MenuWrapper = ({ dict }) => {
  const active = useScrollSpy([
    dict.ideas.title,
    dict.experiments.title,
    dict.about.title,
  ]);

  return (
    <>
      <Menu dict={dict} active={active} homepage={true} />
    </>
  );
};

export default MenuWrapper;
