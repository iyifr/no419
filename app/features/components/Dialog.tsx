'use client'
import { Dialog } from '@headlessui/react'

const DialogComponent = ({ isVisible, setIsVisible }: { isVisible: boolean, setIsVisible?: (state: boolean) => void }) => {

    return <Dialog open={false} onClose={() => null}>
        <Dialog.Panel>
            <Dialog.Title>Deactivate account</Dialog.Title>
            <Dialog.Description>
                This will permanently deactivate your account
            </Dialog.Description>

            <p>
                Are you sure you want to deactivate your account? All of your data
                will be permanently removed. This action cannot be undone.
            </p>

            <button onClick={() => null}>Deactivate</button>
            <button onClick={() => null}>Cancel</button>
        </Dialog.Panel>
    </Dialog>
}

export default DialogComponent