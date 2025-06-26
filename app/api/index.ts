export default function handler(req: unknown, res: { status: (arg0: number) => { (): unknown; new(): unknown; json: { (arg0: { message: string; }): void; new(): unknown; }; }; }) {
    res.status(200).json({ message: 'API Home' });
}
