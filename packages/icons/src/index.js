"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.iconMap = void 0;
const react_1 = __importDefault(require("react"));
const Icons = __importStar(require("./icons"));
__exportStar(require("./SvgIcon"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./icons"), exports);
exports.iconMap = {
    "chevron-right": Icons.ChevronRightIcon,
    "chevron-left": Icons.ChevronLeftIcon,
    "chevron-up": Icons.ChevronUpIcon,
    "chevron-down": Icons.ChevronDownIcon,
    "chevrons-right": Icons.ChevronsRightIcon,
    "chevrons-left": Icons.ChevronsLeftIcon,
    "chevrons-up": Icons.ChevronsUpIcon,
    "chevrons-down": Icons.ChevronsDownIcon,
    "arrow-right": Icons.ArrowRightIcon,
    "arrow-left": Icons.ArrowLeftIcon,
    "arrow-up": Icons.ArrowUpIcon,
    "arrow-down": Icons.ArrowDownIcon,
    "arrow-up-right": Icons.ArrowUpRightIcon,
    "arrow-up-left": Icons.ArrowUpLeftIcon,
    "arrow-down-right": Icons.ArrowDownRightIcon,
    "arrow-down-left": Icons.ArrowDownLeftIcon,
    "corner-down-right": Icons.CornerDownRightIcon,
    "corner-down-left": Icons.CornerDownLeftIcon,
    "corner-up-right": Icons.CornerUpRightIcon,
    "corner-up-left": Icons.CornerUpLeftIcon,
    "menu": Icons.MenuIcon,
    "close": Icons.CloseIcon,
    "x": Icons.XIcon,
    "x-circle": Icons.XCircleIcon,
    "plus": Icons.PlusIcon,
    "plus-circle": Icons.PlusCircleIcon,
    "minus": Icons.MinusIcon,
    "minus-circle": Icons.MinusCircleIcon,
    "check": Icons.CheckIcon,
    "check-check": Icons.CheckCheckIcon,
    "check-circle": Icons.CheckCircleIcon,
    "check-square": Icons.CheckSquareIcon,
    "home": Icons.HomeIcon,
    "compass": Icons.CompassIcon,
    "map": Icons.MapIcon,
    "map-pin": Icons.MapPinIcon,
    "navigation": Icons.NavigationIcon,
    "navigation-2": Icons.Navigation2Icon,
    "layers": Icons.LayersIcon,
    "layout": Icons.LayoutIcon,
    "grid": Icons.GridIcon,
    "sidebar": Icons.SidebarIcon,
    "columns": Icons.ColumnsIcon,
    "rows": Icons.RowsIcon,
    "maximize": Icons.MaximizeIcon,
    "maximize-2": Icons.Maximize2Icon,
    "minimize": Icons.MinimizeIcon,
    "minimize-2": Icons.Minimize2Icon,
    "sliders": Icons.SlidersIcon,
    "filter": Icons.FilterIcon,
    "search": Icons.SearchIcon,
    "zoom-in": Icons.ZoomInIcon,
    "zoom-out": Icons.ZoomOutIcon,
    "external-link": Icons.ExternalLinkIcon,
    "link": Icons.LinkIcon,
    "unlink": Icons.UnlinkIcon,
    "more-horizontal": Icons.MoreHorizontalIcon,
    "more-vertical": Icons.MoreVerticalIcon,
    "toggle-left": Icons.ToggleLeftIcon,
    "toggle-right": Icons.ToggleRightIcon,
    "edit": Icons.EditIcon,
    "edit-2": Icons.Edit2Icon,
    "edit-3": Icons.Edit3Icon,
    "pen": Icons.PenIcon,
    "pencil": Icons.PencilIcon,
    "trash": Icons.TrashIcon,
    "trash-2": Icons.Trash2Icon,
    "copy": Icons.CopyIcon,
    "clipboard": Icons.ClipboardIcon,
    "scissors": Icons.ScissorsIcon,
    "crop": Icons.CropIcon,
    "rotate-ccw": Icons.RotateCcwIcon,
    "rotate-cw": Icons.RotateCwIcon,
    "undo": Icons.UndoIcon,
    "redo": Icons.RedoIcon,
    "refresh": Icons.RefreshIcon,
    "refresh-cw": Icons.RefreshCwIcon,
    "refresh-ccw": Icons.RefreshCcwIcon,
    "sync": Icons.SyncIcon,
    "download": Icons.DownloadIcon,
    "upload": Icons.UploadIcon,
    "download-cloud": Icons.DownloadCloudIcon,
    "upload-cloud": Icons.UploadCloudIcon,
    "pin": Icons.PinIcon,
    "bookmark": Icons.BookmarkIcon,
    "tag": Icons.TagIcon,
    "send": Icons.SendIcon,
    "share": Icons.ShareIcon,
    "share-2": Icons.Share2Icon,
    "flag": Icons.FlagIcon,
    "settings": Icons.SettingsIcon,
    "tool": Icons.ToolIcon,
    "wrench": Icons.WrenchIcon,
    "save": Icons.SaveIcon,
    "palette": Icons.PaletteIcon,
    "sparkles": Icons.SparklesIcon,
    "monitor": Icons.MonitorIcon,
    "laptop": Icons.LaptopIcon,
    "smartphone": Icons.SmartphoneIcon,
    "tablet": Icons.TabletIcon,
    "watch": Icons.WatchIcon,
    "tv": Icons.TvIcon,
    "hard-drive": Icons.HardDriveIcon,
    "cpu": Icons.CpuIcon,
    "server": Icons.ServerIcon,
    "database": Icons.DatabaseIcon,
    "wifi": Icons.WifiIcon,
    "wifi-off": Icons.WifiOffIcon,
    "bluetooth": Icons.BluetoothIcon,
    "battery": Icons.BatteryIcon,
    "battery-charging": Icons.BatteryChargingIcon,
    "power": Icons.PowerIcon,
    "cast": Icons.CastIcon,
    "printer": Icons.PrinterIcon,
    "qr-code": Icons.QrCodeIcon,
    "barcode": Icons.BarcodeIcon,
    "user": Icons.UserIcon,
    "user-plus": Icons.UserPlusIcon,
    "user-minus": Icons.UserMinusIcon,
    "user-check": Icons.UserCheckIcon,
    "user-x": Icons.UserXIcon,
    "users": Icons.UsersIcon,
    "message-square": Icons.MessageSquareIcon,
    "message-circle": Icons.MessageCircleIcon,
    "mail": Icons.MailIcon,
    "inbox": Icons.InboxIcon,
    "phone": Icons.PhoneIcon,
    "phone-call": Icons.PhoneCallIcon,
    "phone-off": Icons.PhoneOffIcon,
    "bell": Icons.BellIcon,
    "bell-off": Icons.BellOffIcon,
    "at-sign": Icons.AtSignIcon,
    "globe": Icons.GlobeIcon,
    "rss": Icons.RssIcon,
    "lock": Icons.LockIcon,
    "unlock": Icons.UnlockIcon,
    "key": Icons.KeyIcon,
    "shield": Icons.ShieldIcon,
    "shield-check": Icons.ShieldCheckIcon,
    "shield-alert": Icons.ShieldAlertIcon,
    "shield-off": Icons.ShieldOffIcon,
    "eye": Icons.EyeIcon,
    "eye-off": Icons.EyeOffIcon,
    "alert-circle": Icons.AlertCircleIcon,
    "alert-triangle": Icons.AlertTriangleIcon,
    "help-circle": Icons.HelpCircleIcon,
    "info": Icons.InfoIcon,
    "play": Icons.PlayIcon,
    "play-circle": Icons.PlayCircleIcon,
    "pause": Icons.PauseIcon,
    "pause-circle": Icons.PauseCircleIcon,
    "stop": Icons.StopIcon,
    "stop-circle": Icons.StopCircleIcon,
    "fast-forward": Icons.FastForwardIcon,
    "rewind": Icons.RewindIcon,
    "volume": Icons.VolumeIcon,
    "volume-1": Icons.Volume1Icon,
    "volume-2": Icons.Volume2Icon,
    "volume-x": Icons.VolumeXIcon,
    "mic": Icons.MicIcon,
    "mic-off": Icons.MicOffIcon,
    "camera": Icons.CameraIcon,
    "video": Icons.VideoIcon,
    "video-off": Icons.VideoOffIcon,
    "image": Icons.ImageIcon,
    "music": Icons.MusicIcon,
    "headphones": Icons.HeadphonesIcon,
    "film": Icons.FilmIcon,
    "dollar": Icons.DollarIcon,
    "dollar-sign": Icons.DollarSignIcon,
    "credit-card": Icons.CreditCardIcon,
    "wallet": Icons.WalletIcon,
    "receipt": Icons.ReceiptIcon,
    "shopping-cart": Icons.ShoppingCartIcon,
    "shopping-bag": Icons.ShoppingBagIcon,
    "percent": Icons.PercentIcon,
    "gift": Icons.GiftIcon,
    "trophy": Icons.TrophyIcon,
    "award": Icons.AwardIcon,
    "target": Icons.TargetIcon,
    "trending-up": Icons.TrendingUpIcon,
    "trending-down": Icons.TrendingDownIcon,
    "activity": Icons.ActivityIcon,
    "bar-chart": Icons.BarChartIcon,
    "bar-chart-2": Icons.BarChart2Icon,
    "pie-chart": Icons.PieChartIcon,
    "code": Icons.CodeIcon,
    "command": Icons.CommandIcon,
    "terminal": Icons.TerminalIcon,
    "git-branch": Icons.GitBranchIcon,
    "git-commit": Icons.GitCommitIcon,
    "git-merge": Icons.GitMergeIcon,
    "git-pull-request": Icons.GitPullRequestIcon,
    "box": Icons.BoxPlotIcon,
    "package": Icons.PackageIcon,
    "braces": Icons.BracesIcon,
    "file": Icons.FileIcon,
    "file-code": Icons.FileCodeIcon,
    "file-text": Icons.FileTextIcon,
    "file-plus": Icons.FilePlusIcon,
    "file-minus": Icons.FileMinusIcon,
    "file-check": Icons.FileCheckIcon,
    "book": Icons.BookIcon,
    "book-open": Icons.BookOpenIcon,
    "folder": Icons.FolderIcon,
    "folder-plus": Icons.FolderPlusIcon,
    "folder-minus": Icons.FolderMinusIcon,
    "clock": Icons.ClockIcon,
    "calendar": Icons.CalendarIcon,
    "sun": Icons.SunIcon,
    "moon": Icons.MoonIcon,
    "cloud": Icons.CloudIcon,
    "cloud-rain": Icons.CloudRainIcon,
    "cloud-lightning": Icons.CloudLightningIcon,
    "cloud-snow": Icons.CloudSnowIcon,
    "zap": Icons.ZapIcon,
    "flame": Icons.FlameIcon,
    "droplet": Icons.DropletIcon,
    "wind": Icons.WindIcon,
    "star": Icons.StarIcon,
    "heart": Icons.HeartIcon,
    "thumbs-up": Icons.ThumbsUpIcon,
    "thumbs-down": Icons.ThumbsDownIcon,
    "coffee": Icons.CoffeeIcon,
    "rocket": Icons.RocketIcon,
    "lightbulb": Icons.LightbulbIcon,
    "anchor": Icons.AnchorIcon,
};
/**
 * Dynamic Universal Icon component:
 * `<Icon name="sparkles" size={24} color={semanticColors.primary} />`
 */
const Icon = ({ name, ...props }) => {
    const Component = exports.iconMap[name] || Icons.HelpCircleIcon;
    return react_1.default.createElement(Component, props);
};
exports.Icon = Icon;
exports.Icon.displayName = "Icon";
