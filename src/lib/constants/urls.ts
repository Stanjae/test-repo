import {
  ArrowPathIcon,
  BuildingOffice2Icon,
  CursorArrowRaysIcon,
  PaintBrushIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import {
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

export const products = [
  {
    name: "Cat painting",
    description: "Get a better understanding of your traffic",
    href: "/",
    icon: PaintBrushIcon,
  },
  {
    name: "Technical Documentationt",
    description: "Technical Documentationt of your product",
    href: "technical-documentation",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Buildings",
    description: "Your customers’ data will be safe and secure",
    href: "buildings",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Ferris wheel",
    description: "Connect with third-party tools",
    href: "ferris-wheel",
    icon: SquaresPlusIcon,
  },
  {
    name: "Instagram stories",
    description: "Build strategic funnels that will convert",
    href: "insta-stories",
    icon: ArrowPathIcon,
  },
];
export const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export const techDocumentationUrls = [
  { label: "Introduction", href: "introduction" },
  {
    label: "What you should already know",
    href: "what-you-should-already-know",
  },
  { label: "JavaScript and Java", href: "javascript-and-java" },
  { label: "Hello world", href: "hello-world" },
  { label: "Variables", href: "variables" },
  { label: "Declaring variables", href: "declaring-variables" },
  { label: "Variable scope", href: "variable-scope" },
  { label: "Global variables", href: "global-variables" },
  { label: "Constants", href: "constants" },
  { label: "Data types", href: "data-types" },
  { label: "If...else statements", href: "if-else-statements" },
  {label:"While statements", href:"while-statements"},
  { label: "Functions declaration", href: "functions-declaration" },
  { label: "Reference", href: "reference" },
];