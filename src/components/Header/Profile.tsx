import { Flex ,Box, Text, Avatar} from "@chakra-ui/react";

interface interfaceProfileProps {
    showProfileData?: boolean
}

export function Profile({showProfileData = true }: interfaceProfileProps) {
    return (
        <Flex align="center">
        {showProfileData && (
        <Box mr="4" textAlign="right">
            <Text>Ricardo Brito</Text>
            <Text color="gray.300" fontSize="small">ricardo.jucrist@hotmail.com</Text>
        </Box>
        )}

        <Avatar size="md" name="Ricardo Brito" src="https://avatars.githubusercontent.com/u/51454097?s=60&v=4" />
    </Flex> 
    )
}