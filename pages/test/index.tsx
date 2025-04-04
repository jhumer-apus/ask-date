import { useEmail } from "@/hooks/email";

export default function Test () {

    const { sendMailMessage } = useEmail()

    const mailOptions = {
        from: process.env.GMAIL_USER ?? "jhumerapus@gmail.com",  // Sender's email
        to: "boyax@yopmail.com",
        subject: "Helloooo",  // Subject of the email
        text: "Ughhhh",  // Body of the email
    };
    return (
        <div>
            <button onClick={() => sendMailMessage(mailOptions)}>Test</button>
        </div>
    )
}