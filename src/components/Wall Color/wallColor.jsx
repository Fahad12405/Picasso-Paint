
// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
// import { Button } from "../../components/ui/button"
// import { Badge } from "../../components/ui/badge"
// import { Separator } from "../../components/ui/separator"
// import { Palette, RotateCcw, Download, Share2, Info } from "lucide-react"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip"

// const colorPalette = [
//     { name: "Warm Beige", color: "#F5DEB3", category: "neutral" },
//     { name: "Cool Gray", color: "#A8A8A8", category: "neutral" },
//     { name: "Soft Cream", color: "#F5F5DC", category: "neutral" },
//     { name: "Blush Pink", color: "#FFB6C1", category: "warm" },
//     { name: "Sage Green", color: "#9CAF88", category: "cool" },
//     { name: "Peach", color: "#FFCBA4", category: "warm" },
//     { name: "Sky Blue", color: "#87CEEB", category: "cool" },
//     { name: "Lavender", color: "#E6E6FA", category: "cool" },

//     { name: "Coral", color: "#FF7F50", category: "warm" },
//     { name: "Teal", color: "#008080", category: "cool" },
//     { name: "Mint", color: "#98FB98", category: "cool" },
//     { name: "Hot Pink", color: "#FF69B4", category: "warm" },
//     { name: "Turquoise", color: "#40E0D0", category: "cool" },
//     { name: "Sunshine", color: "#FFD700", category: "warm" },
//     { name: "Forest", color: "#228B22", category: "cool" },
//     { name: "Royal Blue", color: "#4169E1", category: "cool" },

//     { name: "Crimson", color: "#DC143C", category: "warm" },
//     { name: "Charcoal", color: "#36454F", category: "neutral" },
//     { name: "Pure White", color: "#FFFFFF", category: "neutral" },
//     { name: "Deep Black", color: "#000000", category: "neutral" },
// ]


// export default function Component() {
//     const [selectedColor, setSelectedColor] = useState(colorPalette[3]) // Blush Pink
//     const [activeWall, setActiveWall] = useState("left")
//     const [wallColors, setWallColors] = useState({
//         left: "#E8E8E8",
//         right: "#E8E8E8",
//         back: "#F5F5F5",
//     })
//     const [isAnimating, setIsAnimating] = useState(false)
//     const [showMobileMenu, setShowMobileMenu] = useState(false)


//     const handleColorSelect = (color) => {
//         setSelectedColor(color)
//         setIsAnimating(true)
//         setTimeout(() => setIsAnimating(false), 300)
//     }

//     const handleWallClick = (wall) => {
//         setActiveWall(wall)
//         setWallColors((prev) => ({
//             ...prev,
//             [wall]: selectedColor.color,
//         }))
//     }

//     const resetRoom = () => {
//         setWallColors({
//             left: "#E8E8E8",
//             right: "#E8E8E8",
//             back: "#F5F5F5",
//         })
//         setActiveWall("left")
//     }

//     const getWallName = (wall) => {
//         switch (wall) {
//             case "left":
//                 return "Left Wall"
//             case "right":
//                 return "Right Wall"
//             case "back":
//                 return "Back Wall"
//             default:
//                 return "Wall"
//         }
//     }

//     return (
//         <div className="w-full min-h-screen bg-gradient-to-br  px-0 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
//             <div className="w-full space-y-4 md:space-y-6">
//                 {/* Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center space-y-2 px-2"
//                 >
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                         Room Color Designer
//                     </h1>
//                     <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
//                         Transform your space with our interactive color palette
//                     </p>
//                 </motion.div>

//                 {/* Mobile Layout */}
//                 <div className="block xl:hidden space-y-4">
//                     {/* Room Visualization - Mobile */}
//                     <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full">
//                         <Card className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur">
//                             <CardHeader className="pb-2 sm:pb-4">
//                                 <div className="flex items-center justify-between flex-wrap gap-2">
//                                     <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
//                                         <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
//                                         Room Preview
//                                     </CardTitle>
//                                     <div className="flex gap-1 sm:gap-2">
//                                         <Button variant="outline" size="sm" onClick={resetRoom} className="text-xs sm:text-sm px-2 sm:px-3">
//                                             <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-1" />
//                                             <span className="hidden sm:inline">Reset</span>
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </CardHeader>
//                             <CardContent className="p-2 sm:p-4 md:p-6">
//                                 {/* Mobile Room Container */}
//                                 <div className="relative w-full aspect-[4/3] sm:aspect-[5/3] bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-inner">
//                                     <div className="absolute inset-0" style={{ perspective: "800px" }}>
//                                         <div className="relative w-full h-full overflow-hidden">
//                                             {/* Floor */}
//                                             <div
//                                                 className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-amber-100 to-amber-50"
//                                                 style={{
//                                                     transform: "rotateX(75deg)",
//                                                     transformOrigin: "bottom",
//                                                     boxShadow: "0 -10px 30px rgba(0,0,0,0.15) inset",
//                                                 }}
//                                             >
//                                                 <div
//                                                     className="absolute inset-0 opacity-10"
//                                                     style={{
//                                                         backgroundImage:
//                                                             "repeating-linear-gradient(90deg, #8B4513, #8B4513 2px, transparent 2px, transparent 40px), repeating-linear-gradient(0deg, #8B4513, #8B4513 1px, transparent 1px, transparent 200px)",
//                                                     }}
//                                                 />
//                                             </div>

//                                             {/* Back Wall */}
//                                             <motion.div
//                                                 className="absolute top-[5%] left-[20%] right-[20%] h-[60%] cursor-pointer border border-gray-200"
//                                                 style={{
//                                                     backgroundColor: wallColors.back,
//                                                     boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
//                                                 }}
//                                                 whileHover={{ filter: "brightness(1.05)" }}
//                                                 whileTap={{ filter: "brightness(0.95)" }}
//                                                 onClick={() => handleWallClick("back")}
//                                                 animate={
//                                                     activeWall === "back"
//                                                         ? {
//                                                             boxShadow: `0 0 25px ${selectedColor.color}60, inset 0 0 30px rgba(255,255,255,0.2)`,
//                                                             borderColor: selectedColor.color,
//                                                         }
//                                                         : {}
//                                                 }
//                                             >
//                                                 {/* Window - Responsive */}
//                                                 <div className="absolute top-[15%] right-[10%] w-[35%] h-[40%] border-2 sm:border-4 border-white rounded-sm shadow-lg overflow-hidden">
//                                                     <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-100">
//                                                         <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5 sm:gap-1 p-0.5 sm:p-1">
//                                                             <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
//                                                             <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
//                                                             <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
//                                                             <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
//                                                         </div>
//                                                         <div className="absolute bottom-[-4px] sm:bottom-[-8px] left-[-4px] sm:left-[-8px] right-[-4px] sm:right-[-8px] h-[8px] sm:h-[12px] bg-white rounded-sm shadow-sm"></div>
//                                                     </div>
//                                                 </div>

//                                                 {/* Picture Frame */}
//                                                 <div className="absolute bottom-[25%] left-[15%] w-[25%] h-[30%] bg-amber-50 border-2 sm:border-4 border-amber-800 shadow-md">
//                                                     <div className="absolute inset-1 sm:inset-2 bg-green-200"></div>
//                                                 </div>
//                                             </motion.div>

//                                             {/* Left Wall */}
//                                             <motion.div
//                                                 className="absolute top-[5%] left-0 w-[20%] h-[60%] cursor-pointer border border-gray-200"
//                                                 style={{
//                                                     backgroundColor: wallColors.left,
//                                                     transform: "rotateY(45deg)",
//                                                     transformOrigin: "right center",
//                                                     boxShadow: "10px 5px 20px rgba(0,0,0,0.15) inset",
//                                                 }}
//                                                 whileHover={{ filter: "brightness(1.05)" }}
//                                                 whileTap={{ filter: "brightness(0.95)" }}
//                                                 onClick={() => handleWallClick("left")}
//                                                 animate={
//                                                     activeWall === "left"
//                                                         ? {
//                                                             boxShadow: `0 0 25px ${selectedColor.color}60, inset 0 0 30px rgba(255,255,255,0.2)`,
//                                                             borderColor: selectedColor.color,
//                                                         }
//                                                         : {}
//                                                 }
//                                             >
//                                                 <div className="absolute bottom-[30%] right-[15%] w-[20%] h-[10%] bg-white border border-gray-300 rounded-sm shadow-sm">
//                                                     <div className="absolute inset-0.5 sm:inset-1 bg-gray-100 rounded-sm"></div>
//                                                 </div>
//                                             </motion.div>

//                                             {/* Right Wall */}
//                                             <motion.div
//                                                 className="absolute top-[5%] right-0 w-[20%] h-[60%] cursor-pointer border border-gray-200"
//                                                 style={{
//                                                     backgroundColor: wallColors.right,
//                                                     transform: "rotateY(-45deg)",
//                                                     transformOrigin: "left center",
//                                                     boxShadow: "-10px 5px 20px rgba(0,0,0,0.15) inset",
//                                                 }}
//                                                 whileHover={{ filter: "brightness(1.05)" }}
//                                                 whileTap={{ filter: "brightness(0.95)" }}
//                                                 onClick={() => handleWallClick("right")}
//                                                 animate={
//                                                     activeWall === "right"
//                                                         ? {
//                                                             boxShadow: `0 0 25px ${selectedColor.color}60, inset 0 0 30px rgba(255,255,255,0.2)`,
//                                                             borderColor: selectedColor.color,
//                                                         }
//                                                         : {}
//                                                 }
//                                             >
//                                                 <div className="absolute top-[25%] left-[10%] w-[70%] h-[6%] bg-amber-800 rounded-sm shadow-md">
//                                                     <div className="absolute top-[-50%] left-[10%] right-[10%] h-[50%] bg-amber-700 rounded-sm"></div>
//                                                 </div>
//                                             </motion.div>

//                                             {/* Ceiling */}
//                                             <div
//                                                 className="absolute top-0 left-0 right-0 h-[8%] bg-white border-b border-gray-200"
//                                                 style={{ boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
//                                             >
//                                                 <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-100 rounded-full border-2 border-yellow-200 shadow-lg">
//                                                     <div className="absolute inset-1 bg-yellow-50 rounded-full"></div>
//                                                 </div>
//                                             </div>

//                                             {/* Furniture - Responsive */}
//                                             <div
//                                                 className="absolute bottom-[35%] left-[25%] right-[25%] h-[12%] bg-gray-700 rounded-md shadow-lg"
//                                                 style={{
//                                                     filter: "blur(0.5px)",
//                                                     transform: "perspective(500px) rotateX(10deg)",
//                                                 }}
//                                             >
//                                                 <div className="absolute top-[-60%] left-[5%] right-[5%] h-[80%] bg-gray-600 rounded-t-md"></div>
//                                                 <div className="absolute top-[-40%] left-0 w-[20%] h-[60%] bg-gray-650 rounded-md"></div>
//                                                 <div className="absolute top-[-40%] right-0 w-[20%] h-[60%] bg-gray-650 rounded-md"></div>
//                                                 <div className="absolute top-[-20%] left-[25%] w-[15%] h-[40%] bg-gray-500 rounded-sm"></div>
//                                                 <div className="absolute top-[-20%] left-[45%] w-[15%] h-[40%] bg-gray-500 rounded-sm"></div>
//                                                 <div className="absolute top-[-20%] right-[25%] w-[15%] h-[40%] bg-gray-500 rounded-sm"></div>
//                                             </div>

//                                             <div
//                                                 className="absolute bottom-[35%] left-[35%] right-[35%] h-[6%] bg-amber-800 rounded-sm shadow-md"
//                                                 style={{
//                                                     filter: "blur(0.5px)",
//                                                     transform: "perspective(500px) rotateX(15deg)",
//                                                 }}
//                                             >
//                                                 <div className="absolute bottom-[-100%] left-[15%] w-[8%] h-[100%] bg-amber-900"></div>
//                                                 <div className="absolute bottom-[-100%] right-[15%] w-[8%] h-[100%] bg-amber-900"></div>
//                                             </div>

//                                             <div
//                                                 className="absolute bottom-[35%] right-[22%] w-[4%] h-[25%] bg-gray-800"
//                                                 style={{ filter: "blur(0.5px)" }}
//                                             >
//                                                 <div className="absolute top-0 left-[-100%] right-[-100%] h-[25%] bg-amber-100 rounded-full border border-amber-200"></div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Active Wall Indicator */}
//                                     <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col gap-1 sm:gap-2">
//                                         <Badge variant="secondary" className="bg-white/90 backdrop-blur text-xs sm:text-sm">
//                                             Painting: {getWallName(activeWall)}
//                                         </Badge>

//                                         <TooltipProvider>
//                                             <Tooltip>
//                                                 <TooltipTrigger asChild>
//                                                     <Button
//                                                         variant="outline"
//                                                         size="icon"
//                                                         className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white/80"
//                                                     >
//                                                         <Info className="h-3 w-3 sm:h-4 sm:w-4" />
//                                                     </Button>
//                                                 </TooltipTrigger>
//                                                 <TooltipContent>
//                                                     <p className="text-xs sm:text-sm">Click on any wall to apply the selected color</p>
//                                                 </TooltipContent>
//                                             </Tooltip>
//                                         </TooltipProvider>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </motion.div>

//                     {/* Color Palette - Mobile */}
//                     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
//                         <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
//                             <CardHeader className="pb-2 sm:pb-4">
//                                 <CardTitle className="text-base sm:text-lg">Color Palette</CardTitle>
//                                 <div className="flex items-center gap-2 flex-wrap">
//                                     <span className="text-xs sm:text-sm text-gray-600">Selected:</span>
//                                     <motion.div
//                                         className="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-gray-50"
//                                         animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
//                                     >
//                                         <div
//                                             className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-sm"
//                                             style={{ backgroundColor: selectedColor.color }}
//                                         />
//                                         <span className="text-xs sm:text-sm font-medium">{selectedColor.name}</span>
//                                     </motion.div>
//                                 </div>
//                             </CardHeader>
//                             <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-6">
//                                 {/* Neutral Colors */}
//                                 <div>
//                                     <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Neutral Tones</h4>
//                                     <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-4 gap-1.5 sm:gap-2">
//                                         {colorPalette
//                                             .filter((c) => c.category === "neutral")
//                                             .map((color, index) => (
//                                                 <motion.button
//                                                     key={color.name}
//                                                     className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg border-2 border-white shadow-md hover:shadow-lg transition-all duration-200"
//                                                     style={{ backgroundColor: color.color }}
//                                                     onClick={() => handleColorSelect(color)}
//                                                     whileHover={{ scale: 1.1, rotate: 5 }}
//                                                     whileTap={{ scale: 0.95 }}
//                                                     initial={{ opacity: 0, scale: 0 }}
//                                                     animate={{ opacity: 1, scale: 1 }}
//                                                     transition={{ delay: index * 0.05 }}
//                                                 >
//                                                     <AnimatePresence>
//                                                         {selectedColor.name === color.name && (
//                                                             <motion.div
//                                                                 className="absolute inset-0 rounded-lg border-2 sm:border-3 border-purple-500"
//                                                                 initial={{ opacity: 0, scale: 0.8 }}
//                                                                 animate={{ opacity: 1, scale: 1 }}
//                                                                 exit={{ opacity: 0, scale: 0.8 }}
//                                                             />
//                                                         )}
//                                                     </AnimatePresence>
//                                                 </motion.button>
//                                             ))}
//                                     </div>
//                                 </div>

//                                 <Separator />

//                                 {/* Warm Colors */}
//                                 <div>
//                                     <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Warm Colors</h4>
//                                     <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-4 gap-1.5 sm:gap-2">
//                                         {colorPalette
//                                             .filter((c) => c.category === "warm")
//                                             .map((color, index) => (
//                                                 <motion.button
//                                                     key={color.name}
//                                                     className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg border-2 border-white shadow-md hover:shadow-lg transition-all duration-200"
//                                                     style={{ backgroundColor: color.color }}
//                                                     onClick={() => handleColorSelect(color)}
//                                                     whileHover={{ scale: 1.1, rotate: 5 }}
//                                                     whileTap={{ scale: 0.95 }}
//                                                     initial={{ opacity: 0, scale: 0 }}
//                                                     animate={{ opacity: 1, scale: 1 }}
//                                                     transition={{ delay: (index + 4) * 0.05 }}
//                                                 >
//                                                     <AnimatePresence>
//                                                         {selectedColor.name === color.name && (
//                                                             <motion.div
//                                                                 className="absolute inset-0 rounded-lg border-2 sm:border-3 border-purple-500"
//                                                                 initial={{ opacity: 0, scale: 0.8 }}
//                                                                 animate={{ opacity: 1, scale: 1 }}
//                                                                 exit={{ opacity: 0, scale: 0.8 }}
//                                                             />
//                                                         )}
//                                                     </AnimatePresence>
//                                                 </motion.button>
//                                             ))}
//                                     </div>
//                                 </div>

//                                 <Separator />

//                                 {/* Cool Colors */}
//                                 <div>
//                                     <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Cool Colors</h4>
//                                     <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-4 gap-1.5 sm:gap-2">
//                                         {colorPalette
//                                             .filter((c) => c.category === "cool")
//                                             .map((color, index) => (
//                                                 <motion.button
//                                                     key={color.name}
//                                                     className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg border-2 border-white shadow-md hover:shadow-lg transition-all duration-200"
//                                                     style={{ backgroundColor: color.color }}
//                                                     onClick={() => handleColorSelect(color)}
//                                                     whileHover={{ scale: 1.1, rotate: 5 }}
//                                                     whileTap={{ scale: 0.95 }}
//                                                     initial={{ opacity: 0, scale: 0 }}
//                                                     animate={{ opacity: 1, scale: 1 }}
//                                                     transition={{ delay: (index + 8) * 0.05 }}
//                                                 >
//                                                     <AnimatePresence>
//                                                         {selectedColor.name === color.name && (
//                                                             <motion.div
//                                                                 className="absolute inset-0 rounded-lg border-2 sm:border-3 border-purple-500"
//                                                                 initial={{ opacity: 0, scale: 0.8 }}
//                                                                 animate={{ opacity: 1, scale: 1 }}
//                                                                 exit={{ opacity: 0, scale: 0.8 }}
//                                                             />
//                                                         )}
//                                                     </AnimatePresence>
//                                                 </motion.button>
//                                             ))}
//                                     </div>
//                                 </div>

//                                 {/* Instructions */}
//                                 <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
//                                     <p className="text-xs sm:text-sm text-gray-700">
//                                         <strong>How to use:</strong> Select a color from the palette, then click on any wall in the room to
//                                         apply the color. Use the reset button to start over.
//                                     </p>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </motion.div>
//                 </div>

//                 {/* Desktop Layout */}
//                 <div className="hidden xl:block">
//                     <div className="grid xl:grid-cols-3 gap-6">
//                         {/* Room Visualization - Desktop */}
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             className="xl:col-span-2"
//                         >
//                             <Card className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur">
//                                 <CardHeader className="pb-4">
//                                     <div className="flex items-center justify-between">
//                                         <CardTitle className="flex items-center gap-2">
//                                             <Palette className="w-5 h-5 text-purple-600" />
//                                             Room Preview
//                                         </CardTitle>
//                                         <div className="flex gap-2">
//                                             <Button variant="outline" size="sm" onClick={resetRoom}>
//                                                 <RotateCcw className="w-4 h-4 mr-1" />
//                                                 Reset
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 </CardHeader>
//                                 <CardContent className="p-6">
//                                     {/* Desktop Room Container */}
//                                     <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-inner">
//                                         <div className="absolute inset-0" style={{ perspective: "1000px" }}>
//                                             <div className="relative w-full h-full overflow-hidden">
//                                                 {/* Floor */}
//                                                 <div
//                                                     className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-amber-100 to-amber-50"
//                                                     style={{
//                                                         transform: "rotateX(75deg)",
//                                                         transformOrigin: "bottom",
//                                                         boxShadow: "0 -10px 30px rgba(0,0,0,0.15) inset",
//                                                     }}
//                                                 >
//                                                     <div
//                                                         className="absolute inset-0 opacity-10"
//                                                         style={{
//                                                             backgroundImage:
//                                                                 "repeating-linear-gradient(90deg, #8B4513, #8B4513 2px, transparent 2px, transparent 40px), repeating-linear-gradient(0deg, #8B4513, #8B4513 1px, transparent 1px, transparent 200px)",
//                                                         }}
//                                                     />
//                                                 </div>

//                                                 {/* Back Wall */}
//                                                 <motion.div
//                                                     className="absolute top-[5%] left-[25%] right-[25%] h-[60%] cursor-pointer border border-gray-200"
//                                                     style={{
//                                                         backgroundColor: wallColors.back,
//                                                         boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
//                                                     }}
//                                                     whileHover={{ filter: "brightness(1.05)" }}
//                                                     whileTap={{ filter: "brightness(0.95)" }}
//                                                     onClick={() => handleWallClick("back")}
//                                                     animate={
//                                                         activeWall === "back"
//                                                             ? {
//                                                                 boxShadow: `0 0 25px ${selectedColor.color}60, inset 0 0 30px rgba(255,255,255,0.2)`,
//                                                                 borderColor: selectedColor.color,
//                                                             }
//                                                             : {}
//                                                     }
//                                                 >
//                                                     {/* Window */}
//                                                     <div className="absolute top-[20%] right-[15%] w-[30%] h-[35%] border-4 border-white rounded-sm shadow-lg overflow-hidden">
//                                                         <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-100">
//                                                             <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1">
//                                                                 <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
//                                                                 <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
//                                                                 <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
//                                                                 <div className="border border-white/50 bg-sky-200/30 rounded-sm"></div>
//                                                             </div>
//                                                             <div className="absolute bottom-[-8px] left-[-8px] right-[-8px] h-[12px] bg-white rounded-sm shadow-sm"></div>
//                                                         </div>
//                                                     </div>

//                                                     {/* Picture Frame */}
//                                                     <div className="absolute bottom-[25%] left-[20%] w-[20%] h-[25%] bg-amber-50 border-4 border-amber-800 shadow-md">
//                                                         <div className="absolute inset-2 bg-green-200"></div>
//                                                     </div>
//                                                 </motion.div>

//                                                 {/* Left Wall */}
//                                                 <motion.div
//                                                     className="absolute top-[5%] left-0 w-[25%] h-[60%] cursor-pointer border border-gray-200"
//                                                     style={{
//                                                         backgroundColor: wallColors.left,
//                                                         transform: "rotateY(45deg)",
//                                                         transformOrigin: "right center",
//                                                         boxShadow: "10px 5px 20px rgba(0,0,0,0.15) inset",
//                                                     }}
//                                                     whileHover={{ filter: "brightness(1.05)" }}
//                                                     whileTap={{ filter: "brightness(0.95)" }}
//                                                     onClick={() => handleWallClick("left")}
//                                                     animate={
//                                                         activeWall === "left"
//                                                             ? {
//                                                                 boxShadow: `0 0 25px ${selectedColor.color}60, inset 0 0 30px rgba(255,255,255,0.2)`,
//                                                                 borderColor: selectedColor.color,
//                                                             }
//                                                             : {}
//                                                     }
//                                                 >
//                                                     <div className="absolute bottom-[30%] right-[20%] w-[15%] h-[8%] bg-white border border-gray-300 rounded-sm shadow-sm">
//                                                         <div className="absolute inset-1 bg-gray-100 rounded-sm"></div>
//                                                     </div>
//                                                 </motion.div>

//                                                 {/* Right Wall */}
//                                                 <motion.div
//                                                     className="absolute top-[5%] right-0 w-[25%] h-[60%] cursor-pointer border border-gray-200"
//                                                     style={{
//                                                         backgroundColor: wallColors.right,
//                                                         transform: "rotateY(-45deg)",
//                                                         transformOrigin: "left center",
//                                                         boxShadow: "-10px 5px 20px rgba(0,0,0,0.15) inset",
//                                                     }}
//                                                     whileHover={{ filter: "brightness(1.05)" }}
//                                                     whileTap={{ filter: "brightness(0.95)" }}
//                                                     onClick={() => handleWallClick("right")}
//                                                     animate={
//                                                         activeWall === "right"
//                                                             ? {
//                                                                 boxShadow: `0 0 25px ${selectedColor.color}60, inset 0 0 30px rgba(255,255,255,0.2)`,
//                                                                 borderColor: selectedColor.color,
//                                                             }
//                                                             : {}
//                                                     }
//                                                 >
//                                                     <div className="absolute top-[25%] left-[15%] w-[60%] h-[4%] bg-amber-800 rounded-sm shadow-md">
//                                                         <div className="absolute top-[-50%] left-[10%] right-[10%] h-[50%] bg-amber-700 rounded-sm"></div>
//                                                     </div>
//                                                 </motion.div>

//                                                 {/* Ceiling */}
//                                                 <div
//                                                     className="absolute top-0 left-0 right-0 h-[8%] bg-white border-b border-gray-200"
//                                                     style={{ boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
//                                                 >
//                                                     <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-100 rounded-full border-2 border-yellow-200 shadow-lg">
//                                                         <div className="absolute inset-1 bg-yellow-50 rounded-full"></div>
//                                                     </div>
//                                                 </div>

//                                                 {/* Furniture */}
//                                                 <div
//                                                     className="absolute bottom-[35%] left-[30%] right-[30%] h-[12%] bg-gray-700 rounded-md shadow-lg"
//                                                     style={{
//                                                         filter: "blur(0.5px)",
//                                                         transform: "perspective(500px) rotateX(10deg)",
//                                                     }}
//                                                 >
//                                                     <div className="absolute top-[-60%] left-[5%] right-[5%] h-[80%] bg-gray-600 rounded-t-md"></div>
//                                                     <div className="absolute top-[-40%] left-0 w-[20%] h-[60%] bg-gray-650 rounded-md"></div>
//                                                     <div className="absolute top-[-40%] right-0 w-[20%] h-[60%] bg-gray-650 rounded-md"></div>
//                                                     <div className="absolute top-[-20%] left-[25%] w-[15%] h-[40%] bg-gray-500 rounded-sm"></div>
//                                                     <div className="absolute top-[-20%] left-[45%] w-[15%] h-[40%] bg-gray-500 rounded-sm"></div>
//                                                     <div className="absolute top-[-20%] right-[25%] w-[15%] h-[40%] bg-gray-500 rounded-sm"></div>
//                                                 </div>

//                                                 <div
//                                                     className="absolute bottom-[35%] left-[40%] right-[40%] h-[6%] bg-amber-800 rounded-sm shadow-md"
//                                                     style={{
//                                                         filter: "blur(0.5px)",
//                                                         transform: "perspective(500px) rotateX(15deg)",
//                                                     }}
//                                                 >
//                                                     <div className="absolute bottom-[-100%] left-[10%] w-[5%] h-[100%] bg-amber-900"></div>
//                                                     <div className="absolute bottom-[-100%] right-[10%] w-[5%] h-[100%] bg-amber-900"></div>
//                                                 </div>

//                                                 <div
//                                                     className="absolute bottom-[35%] right-[28%] w-[3%] h-[25%] bg-gray-800"
//                                                     style={{ filter: "blur(0.5px)" }}
//                                                 >
//                                                     <div className="absolute top-0 left-[-100%] right-[-100%] h-[25%] bg-amber-100 rounded-full border border-amber-200"></div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Active Wall Indicator */}
//                                         <div className="absolute top-4 left-4 flex flex-col gap-2">
//                                             <Badge variant="secondary" className="bg-white/90 backdrop-blur">
//                                                 Painting: {getWallName(activeWall)}
//                                             </Badge>

//                                             <TooltipProvider>
//                                                 <Tooltip>
//                                                     <TooltipTrigger asChild>
//                                                         <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white/80">
//                                                             <Info className="h-4 w-4" />
//                                                         </Button>
//                                                     </TooltipTrigger>
//                                                     <TooltipContent>
//                                                         <p>Click on any wall to apply the selected color</p>
//                                                     </TooltipContent>
//                                                 </Tooltip>
//                                             </TooltipProvider>
//                                         </div>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </motion.div>

//                         {/* Color Palette - Desktop */}
//                         <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
//                             <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
//                                 <CardHeader>
//                                     <CardTitle className="text-lg">Color Palette</CardTitle>
//                                     <div className="flex items-center gap-2">
//                                         <span className="text-sm text-gray-600">Selected:</span>
//                                         <motion.div
//                                             className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50"
//                                             animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
//                                         >
//                                             <div
//                                                 className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
//                                                 style={{ backgroundColor: selectedColor.color }}
//                                             />
//                                             <span className="text-sm font-medium">{selectedColor.name}</span>
//                                         </motion.div>
//                                     </div>
//                                 </CardHeader>
//                                 <CardContent className="space-y-4">
//                                     {/* Neutral Colors */}
//                                     <div>
//                                         <h4 className="text-sm font-medium text-gray-700 mb-2">Neutral Tones</h4>
//                                         <div className="grid grid-cols-4 gap-2">
//                                             {colorPalette
//                                                 .filter((c) => c.category === "neutral")
//                                                 .map((color, index) => (
//                                                     <motion.button
//                                                         key={color.name}
//                                                         className="relative w-12 h-12 rounded-lg border-2 border-white shadow-md hover:shadow-lg transition-all duration-200"
//                                                         style={{ backgroundColor: color.color }}
//                                                         onClick={() => handleColorSelect(color)}
//                                                         whileHover={{ scale: 1.1, rotate: 5 }}
//                                                         whileTap={{ scale: 0.95 }}
//                                                         initial={{ opacity: 0, scale: 0 }}
//                                                         animate={{ opacity: 1, scale: 1 }}
//                                                         transition={{ delay: index * 0.05 }}
//                                                     >
//                                                         <AnimatePresence>
//                                                             {selectedColor.name === color.name && (
//                                                                 <motion.div
//                                                                     className="absolute inset-0 rounded-lg border-3 border-purple-500"
//                                                                     initial={{ opacity: 0, scale: 0.8 }}
//                                                                     animate={{ opacity: 1, scale: 1 }}
//                                                                     exit={{ opacity: 0, scale: 0.8 }}
//                                                                 />
//                                                             )}
//                                                         </AnimatePresence>
//                                                     </motion.button>
//                                                 ))}
//                                         </div>
//                                     </div>

//                                     <Separator />

//                                     {/* Warm Colors */}
//                                     <div>
//                                         <h4 className="text-sm font-medium text-gray-700 mb-2">Warm Colors</h4>
//                                         <div className="grid grid-cols-4 gap-2">
//                                             {colorPalette
//                                                 .filter((c) => c.category === "warm")
//                                                 .map((color, index) => (
//                                                     <motion.button
//                                                         key={color.name}
//                                                         className="relative w-12 h-12 rounded-lg border-2 border-white shadow-md hover:shadow-lg transition-all duration-200"
//                                                         style={{ backgroundColor: color.color }}
//                                                         onClick={() => handleColorSelect(color)}
//                                                         whileHover={{ scale: 1.1, rotate: 5 }}
//                                                         whileTap={{ scale: 0.95 }}
//                                                         initial={{ opacity: 0, scale: 0 }}
//                                                         animate={{ opacity: 1, scale: 1 }}
//                                                         transition={{ delay: (index + 4) * 0.05 }}
//                                                     >
//                                                         <AnimatePresence>
//                                                             {selectedColor.name === color.name && (
//                                                                 <motion.div
//                                                                     className="absolute inset-0 rounded-lg border-3 border-purple-500"
//                                                                     initial={{ opacity: 0, scale: 0.8 }}
//                                                                     animate={{ opacity: 1, scale: 1 }}
//                                                                     exit={{ opacity: 0, scale: 0.8 }}
//                                                                 />
//                                                             )}
//                                                         </AnimatePresence>
//                                                     </motion.button>
//                                                 ))}
//                                         </div>
//                                     </div>

//                                     <Separator />

//                                     {/* Cool Colors */}
//                                     <div>
//                                         <h4 className="text-sm font-medium text-gray-700 mb-2">Cool Colors</h4>
//                                         <div className="grid grid-cols-4 gap-2">
//                                             {colorPalette
//                                                 .filter((c) => c.category === "cool")
//                                                 .map((color, index) => (
//                                                     <motion.button
//                                                         key={color.name}
//                                                         className="relative w-12 h-12 rounded-lg border-2 border-white shadow-md hover:shadow-lg transition-all duration-200"
//                                                         style={{ backgroundColor: color.color }}
//                                                         onClick={() => handleColorSelect(color)}
//                                                         whileHover={{ scale: 1.1, rotate: 5 }}
//                                                         whileTap={{ scale: 0.95 }}
//                                                         initial={{ opacity: 0, scale: 0 }}
//                                                         animate={{ opacity: 1, scale: 1 }}
//                                                         transition={{ delay: (index + 8) * 0.05 }}
//                                                     >
//                                                         <AnimatePresence>
//                                                             {selectedColor.name === color.name && (
//                                                                 <motion.div
//                                                                     className="absolute inset-0 rounded-lg border-3 border-purple-500"
//                                                                     initial={{ opacity: 0, scale: 0.8 }}
//                                                                     animate={{ opacity: 1, scale: 1 }}
//                                                                     exit={{ opacity: 0, scale: 0.8 }}
//                                                                 />
//                                                             )}
//                                                         </AnimatePresence>
//                                                     </motion.button>
//                                                 ))}
//                                         </div>
//                                     </div>

//                                     {/* Instructions */}
//                                     <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
//                                         <p className="text-sm text-gray-700">
//                                             <strong>How to use:</strong> Select a color from the palette, then click on any wall in the room
//                                             to apply the color. Use the reset button to start over.
//                                         </p>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }




// import { useState, useRef, useEffect } from "react"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
// import { Button } from "@/components/ui/button"
// import { Layers, Palette, Search, Sparkles, Wallpaper, Eye, Home, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react"

// const colors = [
//     { name: "Crimson Red", value: "#DC143C" },
//     { name: "Coral Pink", value: "#FF7F7F" },
//     { name: "Sunset Orange", value: "#FF8C69" },
//     { name: "Golden Yellow", value: "#FFD700" },
//     { name: "Sage Green", value: "#9CAF88" },
//     { name: "Ocean Blue", value: "#4682B4" },
//     { name: "Lavender", value: "#E6E6FA" },
//     { name: "Warm Beige", value: "#F5F5DC" },
//     { name: "Charcoal Gray", value: "#36454F" },
//     { name: "Pure White", value: "#FFFFFF" },
//     { name: "Cream", value: "#FFFDD0" },
//     { name: "Mint Green", value: "#98FB98" },
// ]

// const textures = [
//     {
//         name: "Brushing",
//         pattern:
//             "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%)",
//     },
//     { name: "Canvas", pattern: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)" },
//     { name: "Sponging", pattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 2px, transparent 3px)" },
//     { name: "Smooth", pattern: "none" },
// ]

// // Optimal viewing angles for each wall
// const viewingAngles = {
//     back: { rotationY: 0, rotationX: 5, name: "Front View" },
//     left: { rotationY: 45, rotationX: 5, name: "Left View" },
//     right: { rotationY: -45, rotationX: 5, name: "Right View" },
//     ceiling: { rotationY: 0, rotationX: -25, name: "Ceiling View" },
// }

// export default function Component() {
//     const [selectedWall, setSelectedWall] = useState ("back")
//     const [wallColors, setWallColors] = useState({
//         left: "#F5F5DC",
//         right: "#E6E6FA",
//         back: "#9CAF88",
//         ceiling: "#FFFFFF",
//     })
//     const [selectedTexture, setSelectedTexture] = useState("Smooth")
//     const [isAnimating, setIsAnimating] = useState(false)
//     const [rotationY, setRotationY] = useState(0)
//     const [rotationX, setRotationX] = useState(5)
//     const [isDragging, setIsDragging] = useState(false)
//     const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 })
//     const [currentView, setCurrentView] = useState("Front View")
//     const roomRef = useRef(null)

//     const handleColorChange = (color) => {
//         setIsAnimating(true)
//         setWallColors((prev) => ({
//             ...prev,
//             [selectedWall]: color,
//         }))
//         setTimeout(() => setIsAnimating(false), 400)
//     }

//     const getTexturePattern = (wall) => {
//         const texture = textures.find((t) => t.name === selectedTexture)
//         return texture?.pattern || "none"
//     }

//     // Limit rotation within bounds
//     const limitRotation = (value, min, max) => {
//         return Math.max(min, Math.min(max, value))
//     }

//     const handleMouseDown = (e) => {
//         setIsDragging(true)
//         setLastMousePos({ x: e.clientX, y: e.clientY })
//     }

//     const handleMouseMove = (e) => {
//         if (!isDragging) return

//         const deltaX = e.clientX - lastMousePos.x
//         const deltaY = e.clientY - lastMousePos.y

//         // Limit rotation ranges
//         setRotationY((prev) => limitRotation(prev + deltaX * 0.3, -60, 60))
//         setRotationX((prev) => limitRotation(prev - deltaY * 0.2, -35, 25))

//         setLastMousePos({ x: e.clientX, y: e.clientY })
//     }

//     const handleMouseUp = () => {
//         setIsDragging(false)
//     }

//     // Smooth transition to specific wall view
//     const viewWall = (wall) => {
//         const angle = viewingAngles[wall]
//         setRotationY(angle.rotationY)
//         setRotationX(angle.rotationX)
//         setCurrentView(angle.name)
//         setSelectedWall(wall)
//     }

//     // Quick navigation functions
//     const rotateLeft = () => {
//         if (rotationY > -45) {
//             setRotationY((prev) => limitRotation(prev - 45, -60, 60))
//         }
//     }

//     const rotateRight = () => {
//         if (rotationY < 45) {
//             setRotationY((prev) => limitRotation(prev + 45, -60, 60))
//         }
//     }

//     const lookUp = () => {
//         setRotationX((prev) => limitRotation(prev - 30, -35, 25))
//     }

//     useEffect(() => {
//         const handleGlobalMouseUp = () => setIsDragging(false)
//         const handleGlobalMouseMove = (e) => {
//             if (!isDragging) return

//             const deltaX = e.clientX - lastMousePos.x
//             const deltaY = e.clientY - lastMousePos.y

//             setRotationY((prev) => limitRotation(prev + deltaX * 0.3, -60, 60))
//             setRotationX((prev) => limitRotation(prev - deltaY * 0.2, -35, 25))

//             setLastMousePos({ x: e.clientX, y: e.clientY })
//         }

//         if (isDragging) {
//             document.addEventListener("mousemove", handleGlobalMouseMove)
//             document.addEventListener("mouseup", handleGlobalMouseUp)
//         }

//         return () => {
//             document.removeEventListener("mousemove", handleGlobalMouseMove)
//             document.removeEventListener("mouseup", handleGlobalMouseUp)
//         }
//     }, [isDragging, lastMousePos])

//     return (
//         <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-2xl">
//             {/* Enhanced Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                         <Home className="w-6 h-6" />
//                         <div>
//                             <h1 className="text-xl font-bold">Room Color Visualizer</h1>
//                             <p className="text-blue-100 text-sm">Design your perfect space</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-full">
//                         <Eye className="w-4 h-4" />
//                         {currentView}
//                     </div>
//                 </div>
//             </div>

//             {/* Room Visualization */}
//             <div className="relative h-[500px] md:h-[700px] bg-gradient-to-b from-gray-200 to-gray-300 overflow-hidden">
//                 {/* 3D Room Container */}
//                 <div
//                     ref={roomRef}
//                     className={`absolute inset-0 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
//                     style={{
//                         perspective: "1500px",
//                         perspectiveOrigin: "center center",
//                     }}
//                     onMouseDown={handleMouseDown}
//                     onMouseMove={handleMouseMove}
//                     onMouseUp={handleMouseUp}
//                 >
//                     <div
//                         className="relative w-full h-full transition-transform duration-500 ease-out"
//                         style={{
//                             transformStyle: "preserve-3d",
//                             transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
//                         }}
//                     >
//                         {/* Floor */}
//                         <div
//                             className="absolute bottom-0 w-full shadow-2xl"
//                             style={{
//                                 height: "400px",
//                                 backgroundImage: "url('/images/floor-texture.webp')",
//                                 backgroundSize: "cover",
//                                 backgroundPosition: "center",
//                                 transform: "rotateX(90deg)",
//                                 transformOrigin: "bottom center",
//                                 zIndex: 1,
//                                 boxShadow: "0 -10px 30px rgba(0,0,0,0.3)",
//                             }}
//                         />

//                         {/* Ceiling */}
//                         <div
//                             className={`absolute top-0 w-full transition-all duration-500 ease-in-out cursor-pointer shadow-lg ${isAnimating && selectedWall === "ceiling" ? "brightness-110" : ""
//                                 } ${selectedWall === "ceiling" ? "ring-4 ring-yellow-400 ring-opacity-50" : ""}`}
//                             style={{
//                                 backgroundColor: wallColors.ceiling,
//                                 backgroundImage: getTexturePattern("ceiling"),
//                                 backgroundSize: "60px 60px",
//                                 height: "400px",
//                                 transform: "rotateX(-90deg)",
//                                 transformOrigin: "top center",
//                                 zIndex: 6,
//                                 boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
//                             }}
//                             onClick={(e) => {
//                                 e.stopPropagation()
//                                 viewWall("ceiling")
//                             }}
//                         >
//                             {selectedWall === "ceiling" && (
//                                 <div className="absolute inset-0 border-4 border-yellow-400 animate-pulse opacity-80" />
//                             )}
//                             {/* Ceiling Light */}
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                                 <div className="w-20 h-20 bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-full shadow-2xl opacity-90">
//                                     <div className="w-full h-full bg-gradient-to-br from-white to-yellow-50 rounded-full border-4 border-yellow-300" />
//                                     <div className="absolute inset-0 bg-yellow-200 rounded-full animate-pulse opacity-30"></div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Back Wall */}
//                         <div
//                             className={`absolute inset-0 transition-all duration-500 ease-in-out cursor-pointer shadow-lg ${isAnimating && selectedWall === "back" ? "brightness-110" : ""
//                                 } ${selectedWall === "back" ? "ring-4 ring-yellow-400 ring-opacity-50" : ""}`}
//                             style={{
//                                 backgroundColor: wallColors.back,
//                                 backgroundImage: getTexturePattern("back"),
//                                 backgroundSize: "50px 50px",
//                                 transform: "translateZ(-200px)",
//                                 zIndex: 2,
//                                 boxShadow: "inset 0 0 80px rgba(0,0,0,0.15)",
//                             }}
//                             onClick={(e) => {
//                                 e.stopPropagation()
//                                 viewWall("back")
//                             }}
//                         >
//                             {selectedWall === "back" && (
//                                 <div className="absolute inset-0 border-4 border-yellow-400 animate-pulse opacity-80" />
//                             )}

//                             {/* Wall Painting */}
//                             <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
//                                 <div className="w-40 h-32 bg-white rounded shadow-2xl p-3 border-4 border-gray-200">
//                                     <img src="/images/painting.webp" alt="Wall Art" className="w-full h-full object-cover rounded" />
//                                 </div>
//                             </div>

//                             {/* Floor Lamp */}
//                             <div className="absolute bottom-12 right-20">
//                                 <div className="w-4 h-24 bg-gradient-to-t from-gray-800 to-gray-600 rounded-full shadow-lg"></div>
//                                 <div className="w-16 h-10 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-full -mt-3 ml-[-24px] shadow-xl border-2 border-yellow-300"></div>
//                             </div>

//                             {/* Bookshelf */}
//                             <div className="absolute bottom-12 left-20">
//                                 <img
//                                     src="/images/bookshelf.webp"
//                                     alt="Bookshelf"
//                                     className="w-20 h-32 object-cover rounded shadow-xl"
//                                 />
//                             </div>
//                         </div>

//                         {/* Left Wall */}
//                         <div
//                             className={`absolute left-0 top-0 h-full transition-all duration-500 ease-in-out cursor-pointer shadow-lg ${isAnimating && selectedWall === "left" ? "brightness-110" : ""
//                                 } ${selectedWall === "left" ? "ring-4 ring-yellow-400 ring-opacity-50" : ""}`}
//                             style={{
//                                 backgroundColor: wallColors.left,
//                                 backgroundImage: getTexturePattern("left"),
//                                 backgroundSize: "50px 50px",
//                                 width: "400px",
//                                 transform: "rotateY(90deg)",
//                                 transformOrigin: "left center",
//                                 zIndex: 3,
//                                 boxShadow: "inset 0 0 80px rgba(0,0,0,0.25)",
//                             }}
//                             onClick={(e) => {
//                                 e.stopPropagation()
//                                 viewWall("left")
//                             }}
//                         >
//                             {selectedWall === "left" && (
//                                 <div className="absolute inset-0 border-4 border-yellow-400 animate-pulse opacity-80" />
//                             )}

//                             {/* Plant */}
//                             <div className="absolute bottom-12 right-12">
//                                 <img src="/images/plant.webp" alt="Plant" className="w-20 h-32 object-cover rounded-lg shadow-xl" />
//                             </div>

//                             {/* Chair */}
//                             <div className="absolute bottom-12 left-16">
//                                 <img src="/images/chair.webp" alt="Chair" className="w-16 h-20 object-cover rounded shadow-lg" />
//                             </div>
//                         </div>

//                         {/* Right Wall */}
//                         <div
//                             className={`absolute right-0 top-0 h-full transition-all duration-500 ease-in-out cursor-pointer shadow-lg ${isAnimating && selectedWall === "right" ? "brightness-110" : ""
//                                 } ${selectedWall === "right" ? "ring-4 ring-yellow-400 ring-opacity-50" : ""}`}
//                             style={{
//                                 backgroundColor: wallColors.right,
//                                 backgroundImage: getTexturePattern("right"),
//                                 backgroundSize: "50px 50px",
//                                 width: "400px",
//                                 transform: "rotateY(-90deg)",
//                                 transformOrigin: "right center",
//                                 zIndex: 4,
//                                 boxShadow: "inset 0 0 80px rgba(0,0,0,0.25)",
//                             }}
//                             onClick={(e) => {
//                                 e.stopPropagation()
//                                 viewWall("right")
//                             }}
//                         >
//                             {selectedWall === "right" && (
//                                 <div className="absolute inset-0 border-4 border-yellow-400 animate-pulse opacity-80" />
//                             )}

//                             {/* Window */}
//                             <div className="absolute top-16 left-12">
//                                 <div className="w-28 h-36 bg-white border-4 border-gray-400 rounded shadow-2xl overflow-hidden">
//                                     <img src="/images/window-view.webp" alt="Window View" className="w-full h-full object-cover" />
//                                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>
//                                     <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 shadow-sm"></div>
//                                     <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-400 shadow-sm"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Enhanced Quick View Buttons */}
//                 <div className="absolute top-4 left-4 flex flex-col gap-2">
//                     {Object.entries(viewingAngles).map(([wall, angle]) => (
//                         <Button
//                             key={wall}
//                             onClick={() => viewWall(wall)}
//                             variant={selectedWall === wall ? "default" : "secondary"}
//                             size="sm"
//                             className={`transition-all duration-200 ${selectedWall === wall
//                                     ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg scale-105"
//                                     : "bg-white/90 hover:bg-white text-gray-700"
//                                 }`}
//                         >
//                             {wall === "back" && <Home className="w-4 h-4 mr-1" />}
//                             {wall === "left" && <ArrowLeft className="w-4 h-4 mr-1" />}
//                             {wall === "right" && <ArrowRight className="w-4 h-4 mr-1" />}
//                             {wall === "ceiling" && <ArrowUp className="w-4 h-4 mr-1" />}
//                             <span className="capitalize">{wall}</span>
//                         </Button>
//                     ))}
//                 </div>

//                 {/* Enhanced Navigation Controls */}
//                 <div className="absolute bottom-4 left-4 flex gap-2">
//                     <Button
//                         onClick={rotateLeft}
//                         disabled={rotationY <= -60}
//                         size="sm"
//                         className="bg-white/90 hover:bg-white text-gray-700 disabled:opacity-50"
//                     >
//                         <ArrowLeft className="w-4 h-4" />
//                     </Button>
//                     <Button
//                         onClick={rotateRight}
//                         disabled={rotationY >= 60}
//                         size="sm"
//                         className="bg-white/90 hover:bg-white text-gray-700 disabled:opacity-50"
//                     >
//                         <ArrowRight className="w-4 h-4" />
//                     </Button>
//                     <Button
//                         onClick={lookUp}
//                         disabled={rotationX <= -35}
//                         size="sm"
//                         className="bg-white/90 hover:bg-white text-gray-700 disabled:opacity-50"
//                     >
//                         <ArrowUp className="w-4 h-4" />
//                     </Button>
//                 </div>

//                 {/* Enhanced Instructions */}
//                 <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
//                     <div className="flex items-center gap-2 mb-1">
//                         <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                         <span className="font-medium">Interactive Controls</span>
//                     </div>
//                     <div className="text-xs text-gray-300">🖱️ Drag to explore • 👆 Click walls • 🎯 Use quick view buttons</div>
//                 </div>

//                 {/* Enhanced Wall Selection Panel */}
//                 <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200">
//                     <div className="text-sm font-semibold mb-3 flex items-center gap-2 text-gray-700">
//                         <Layers className="w-4 h-4" />
//                         Room Elements
//                     </div>
//                     <div className="space-y-2">
//                         {[
//                             { key: "ceiling", label: "Ceiling", icon: "🏠", color: wallColors.ceiling },
//                             { key: "left", label: "Left Wall", icon: "🧱", color: wallColors.left },
//                             { key: "right", label: "Right Wall", icon: "🧱", color: wallColors.right },
//                             { key: "back", label: "Back Wall", icon: "🧱", color: wallColors.back },
//                         ].map((wall) => (
//                             <button
//                                 key={wall.key}
//                                 onClick={() => viewWall(wall.key)}
//                                 className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 ${selectedWall === wall.key
//                                         ? "bg-blue-100 text-blue-800 shadow-md border-2 border-blue-300 scale-105"
//                                         : "hover:bg-gray-100 border-2 border-transparent hover:scale-102"
//                                     }`}
//                             >
//                                 <div
//                                     className="w-5 h-5 rounded border border-gray-300 shadow-sm"
//                                     style={{ backgroundColor: wall.color }}
//                                 />
//                                 <span className="font-medium">{wall.label}</span>
//                                 {selectedWall === wall.key && <div className="w-2 h-2 bg-blue-500 rounded-full ml-auto"></div>}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Enhanced Current Selection Indicator */}
//                 <div className="absolute top-20 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl px-4 py-3 shadow-xl">
//                     <div className="text-sm font-medium mb-1">Currently Editing:</div>
//                     <div className="text-xl font-bold capitalize">{selectedWall}</div>
//                     <div className="flex items-center gap-2 mt-2">
//                         <div
//                             className="w-8 h-8 rounded-lg border-2 border-white shadow-sm"
//                             style={{ backgroundColor: wallColors[selectedWall] }}
//                         />
//                         <span className="text-sm text-blue-100">Choose color below</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Enhanced Control Panel */}
//             <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
//                 <Tabs defaultValue="colors" className="w-full">
//                     <TabsList className="w-full bg-gray-700/50 rounded-none h-16 p-1">
//                         <TabsTrigger
//                             value="colors"
//                             className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:shadow-lg transition-all duration-200"
//                         >
//                             <Palette className="w-5 h-5 mr-2" />
//                             <span className="hidden sm:inline">Colors</span>
//                         </TabsTrigger>
//                         <TabsTrigger
//                             value="textures"
//                             className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:shadow-lg transition-all duration-200"
//                         >
//                             <Sparkles className="w-5 h-5 mr-2" />
//                             <span className="hidden sm:inline">Textures</span>
//                         </TabsTrigger>
//                         <TabsTrigger
//                             value="wallpaper"
//                             className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:shadow-lg transition-all duration-200"
//                         >
//                             <Wallpaper className="w-5 h-5 mr-2" />
//                             <span className="hidden sm:inline">Wallpaper</span>
//                         </TabsTrigger>
//                         <TabsTrigger
//                             value="search"
//                             className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:shadow-lg transition-all duration-200"
//                         >
//                             <Search className="w-5 h-5 mr-2" />
//                             <span className="hidden sm:inline">Search</span>
//                         </TabsTrigger>
//                     </TabsList>

//                     <TabsContent value="colors" className="p-4 md:p-6">
//                         <div className="mb-4">
//                             <h3 className="text-lg font-semibold mb-2">Choose Color for {selectedWall} Wall</h3>
//                             <p className="text-gray-400 text-sm">Click any color to apply it to the selected wall</p>
//                         </div>
//                         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
//                             {colors.map((color, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => handleColorChange(color.value)}
//                                     className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 transform"
//                                     style={{ backgroundColor: color.value }}
//                                 >
//                                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
//                                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                                         <div className="font-medium truncate">{color.name}</div>
//                                     </div>
//                                     {wallColors[selectedWall] === color.value && (
//                                         <div className="absolute inset-0 border-4 border-yellow-400 rounded-xl shadow-lg">
//                                             <div className="absolute inset-0 bg-yellow-400/20 rounded-lg"></div>
//                                             <div className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
//                                         </div>
//                                     )}
//                                 </button>
//                             ))}
//                         </div>
//                     </TabsContent>

//                     <TabsContent value="textures" className="p-4 md:p-6">
//                         <div className="mb-4">
//                             <h3 className="text-lg font-semibold mb-2">Wall Textures</h3>
//                             <p className="text-gray-400 text-sm">Add texture effects to your walls</p>
//                         </div>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {textures.map((texture, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => setSelectedTexture(texture.name)}
//                                     className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 transform ${selectedTexture === texture.name
//                                             ? "border-yellow-400 bg-gray-700 shadow-xl"
//                                             : "border-gray-600 bg-gray-700/50 hover:border-gray-500"
//                                         }`}
//                                 >
//                                     <div
//                                         className="w-full h-16 rounded-lg mb-3 shadow-inner"
//                                         style={{
//                                             backgroundColor: wallColors[selectedWall],
//                                             backgroundImage: texture.pattern,
//                                             backgroundSize: "20px 20px",
//                                         }}
//                                     />
//                                     <div className="text-sm font-semibold text-center">{texture.name}</div>
//                                     {selectedTexture === texture.name && (
//                                         <div className="w-2 h-2 bg-yellow-400 rounded-full mx-auto mt-2"></div>
//                                     )}
//                                 </button>
//                             ))}
//                         </div>
//                     </TabsContent>

//                     <TabsContent value="wallpaper" className="p-6">
//                         <div className="text-center py-12">
//                             <Wallpaper className="w-16 h-16 mx-auto mb-6 text-gray-400" />
//                             <h3 className="text-xl font-semibold mb-2 text-gray-300">Premium Wallpaper Collection</h3>
//                             <p className="text-gray-400 mb-4">Beautiful wallpaper designs coming soon!</p>
//                             <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
//                                 Get Notified
//                             </Button>
//                         </div>
//                     </TabsContent>

//                     <TabsContent value="search" className="p-6">
//                         <div className="text-center py-12">
//                             <Search className="w-16 h-16 mx-auto mb-6 text-gray-400" />
//                             <h3 className="text-xl font-semibold mb-2 text-gray-300">Smart Color Search</h3>
//                             <p className="text-gray-400 mb-4">AI-powered color matching coming soon!</p>
//                             <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
//                                 Join Waitlist
//                             </Button>
//                         </div>
//                     </TabsContent>
//                 </Tabs>
//             </div>
//         </div>
//     )
// }

import { useState } from "react"
import { Heart, Share2, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Sofa from "@/assets/sofa.png" // Replace with your actual sofa PNG path

const colors = [
  { name: "Pale Peach", hex: "#F5D5AE" },
  { name: "Light Pink", hex: "#F8E8E8" },
  { name: "Light Gray", hex: "#E5E5E5" },
  { name: "Pale Yellow", hex: "#F5F5DC" },
  { name: "Cream", hex: "#F5F5DC" },
  { name: "Beige", hex: "#D2B48C" },
  { name: "Off White", hex: "#FAF0E6" },
  { name: "Light Lavender", hex: "#E6E6FA" },
  { name: "Pale Blue", hex: "#B0E0E6" },
  { name: "Light Green", hex: "#F0FFF0" },
  { name: "Peach", hex: "#FFCBA4" },
  { name: "Light Brown", hex: "#D2B48C" },
  { name: "Powder Blue", hex: "#B0E0E6" },
  { name: "Mint Green", hex: "#F5FFFA" },
  { name: "Light Orange", hex: "#FFE4B5" },
  { name: "Rose", hex: "#FFE4E1" },
  { name: "Pale Green", hex: "#98FB98" },
  { name: "Light Coral", hex: "#F08080" },
  { name: "Sky Blue", hex: "#87CEEB" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Light Yellow", hex: "#FFFFE0" },
  { name: "Pale Orange", hex: "#FFEFD5" },
  { name: "Light Cyan", hex: "#E0FFFF" },
  { name: "Pale Pink", hex: "#FFE4E1" },
  { name: "Sage Green", hex: "#9CAF88" },
  { name: "Bright Yellow", hex: "#FFFF00" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Forest Green", hex: "#228B22" },
  { name: "Light Blue", hex: "#ADD8E6" },
  { name: "Violet", hex: "#8A2BE2" },
  { name: "Olive", hex: "#808000" },
  { name: "Navy Blue", hex: "#000080" },
  { name: "Purple", hex: "#800080" },
  { name: "Maroon", hex: "#800000" },
  { name: "Black", hex: "#000000" },

  // ✅ New light wall-friendly shades
  { name: "Almond White", hex: "#F4F1EE" },
  { name: "Dusty Rose", hex: "#EED5D2" },
  { name: "Linen", hex: "#FAF0E6" },
  { name: "Blush Beige", hex: "#F2D7C9" },
  { name: "Cloud Gray", hex: "#D6D6D6" }
];


export default function Component() {
  const [selectedColor, setSelectedColor] = useState(colors[3]) // Pale Yellow

  return (
    <div className="min-h-screen bg-gradient-to-br from-white  to-white rounded-xl">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side – Wall Preview */}
          <div className="w-full">
            <Card className="overflow-hidden shadow-2xl rounded-2xl border border-gray-200 transition duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
              <div
                className="relative aspect-[4/3] bg-white rounded-lg"
                style={{ backgroundColor: selectedColor.hex }}
              >
                {/* Sofa image */}
                <img
                  src={Sofa}
                  alt="Sofa"
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[80%] h-auto object-contain pointer-events-none transition-all duration-500 hover:scale-105"
                />
              </div>
            </Card>
          </div>

          {/* Right side – Product Info */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">🎨 Picasso Paint</h1>
                <p className="text-gray-500 text-sm mt-1">Premium Interior Wall Colors</p>
              </div>
              <Button variant="ghost" size="icon" className="text-pink-600 hover:text-pink-800 transition">
                <Heart className="w-6 h-6" />
              </Button>
            </div>

            {/* Color Selector */}
            <div className="space-y-3">
  <div className="flex items-center gap-2">
    <label className="text-sm font-semibold text-gray-900">Selected Shade:</label>
    <span className="text-sm text-gray-600">{selectedColor.name}</span>
  </div>

  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
    {colors.map((color, index) => (
      <button
        key={index}
        onClick={() => setSelectedColor(color)}
        className={`w-full h-10 min-w-[70px] rounded-md border-[2px] transition-all duration-300 hover:scale-[1.02] shadow-sm ${
          selectedColor.name === color.name
            ? "border-gray-900 ring-2 ring-offset-1 ring-gray-300"
            : "border-gray-300"
        }`}
        style={{ backgroundColor: color.hex }}
        title={color.name}
      />
    ))}
  </div>

  <p className="text-xs text-gray-500 italic">*Actual color may slightly vary from display.</p>
</div>


            {/* Action buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition"
              >
                <HelpCircle className="w-4 h-4" />
                Ask a question
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition"
              >
                <Share2 className="w-4 h-4" />
                Share Shade
              </Button>
            </div>

            {/* Product Features */}
            <div className="p-4 rounded-xl border border-gray-200 bg-white/70 shadow-sm space-y-2">
              <h3 className="font-semibold text-gray-900 text-lg mb-1">✨ Product Features</h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Quick wash formula for easy maintenance</li>
                <li>Superior coverage and long-lasting durability</li>
                <li>Low odor and eco-friendly composition</li>
                <li>Perfect for interior walls & ceilings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
