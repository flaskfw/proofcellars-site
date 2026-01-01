export const BRAND_OVERRIDES: Record<string, {
    condition_factors?: string[]; // Bullet points on what affects value
    authenticity_tips?: string[]; // Specific things we look for
}> = {
    'van-winkle': {
        condition_factors: [
            "Laser Codes: Matching laser codes on the glass help us verify vintage and maximize your offer.",
            "Fill Level: For older vintages (2008 and prior), high fill levels command the best prices.",
            "Capsule Condition: Clean, uncracked foils are preferred, though we frequently buy bottles with minor cosmetic wear."
        ],
        authenticity_tips: [
            "We check for the laser code beneath the front label to confirm the specific year.",
            "We look for the specific 'bottle code' stamped on the bottom of the glass."
        ]
    },
    'macallan': {
        condition_factors: [
            "Import Strips: US import strips often carry a premium over parallel imports.",
            "Packaging: Original wooden boxes (e.g., for 25yr/30yr) add significant value if present.",
            "Condition: We understand older boxes may have shelf wear; simply include photos of any dings or scratches."
        ]
    }
};
