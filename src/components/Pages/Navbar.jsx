import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import { FiLogOut } from "react-icons/fi";
import { FaCreativeCommonsShare } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const user = {
  name: "Ashish Singh",
  emai: "your email.com",
};

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Pricing", href: "/plans", current: true },
];

export default function Navbar() {
  return (
   
      <Disclosure as={nav}  className="bg-gray-900">
        {({open})=>(
          <>
             <div>
              
             </div>
          </>
        )}
      </Disclosure>
  
  );
}
